import { PrismaClient } from "@prisma/client";
import { createHash } from "node:crypto";
import mail from "@sendgrid/mail";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = useQuery(event);

  if (query.email) {
    const user = await prisma.user.findUnique({
      where: {
        email: query.email.toString(),
      },
    });

    if (user === null) return { message: "Not found", code: "404" };

    const authToken = createHash("sha256")
      .update(user.email + user.id + Date.now().toString())
      .digest("base64");

    await prisma.user.update({
      where: {
        email: query.email.toString(),
      },
      data: {
        authToken: authToken,
      },
    });

    const mailData = {
      to: query.email,
      from: "capy@capycode.org",
      subject: "Seu código de autenticação na CapyCode",
      message: `Seu código único de login é: ${authToken}`,
      html: `<p>Seu código único de login é: </p><code>${authToken}</code>`,
    };

    if (process.env.SENDGRID_KEY) {
      mail.setApiKey(process.env.SENDGRID_KEY);
      mail.send(mailData);
      return { message: "Email sent", code: "200" };
    }
  }
});

import satori from "satori";
import { html } from "satori-html";

export default defineEventHandler(async (event) => {
  const query = useQuery(event);
  appendResponseHeader(event, "Content-Type", "image/svg+xml");

  if (query.type && query.description && query.name) {
    const size = query.name.length < 12 ? "48px" : "32px";

    const output = html`<div
      style="font-family:'Poppins'; display: flex; flex-direction: column; height: 100%; padding: 32px 16px 8px 16px;"
    >
      <p style="background-color: #228BE6; padding: 4px 32px; color: white; font-weight: 700; border-radius: 16px; display: flex; flex-direction: column; justify-content: center; margin: 0; margin-top: 72px;">
      ${query.type.toString().toUpperCase()}
      </p>
        <h1
          style="font-weight: 700; font-size: ${size}; color: #FF922B; margin-bottom: 0px;"
        >
          ${query.name}
        </h1>
         <p style="margin-top: -6px;">${query.description}</p>
      </div>
    </div> `;

    const svg = await satori(output, {
      width: 600,
      height: 400,
      fonts: [
        {
          name: "Poppins",
          data: await fetch(
            "https://fonts.cdnfonts.com/s/16009/Poppins-Regular.woff"
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: "normal",
        },
        {
          name: "Poppins",
          data: await fetch(
            "https://fonts.cdnfonts.com/s/16009/Poppins-Bold.woff"
          ).then((res) => res.arrayBuffer()),
          weight: 700,
          style: "normal",
        },
      ],
    });

    return svg;
  }
});

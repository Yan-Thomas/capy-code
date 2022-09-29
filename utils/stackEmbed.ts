import sdk, { EmbedOptions } from "@stackblitz/sdk";

const options: EmbedOptions = {
  height: "100%",
  width: "54%",
  hideNavigation: true,
  hideDevTools: true,
};

export default async function embedStackBlitz(
  elementId: string,
  projectId: string
) {
  return await sdk.embedProjectId(elementId, projectId, options);
}

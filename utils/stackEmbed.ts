import sdk from "@stackblitz/sdk";

const options = {
  height: "100%",
  width: "60%",
  hideExplorer: true,
  hideNavigation: true,
  hideDevTools: true,
};

export default async function embedStackBlitz(
  elementId: string,
  projectId: string
) {
  return sdk.embedProjectId(elementId, projectId, options);
}

import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "wips94o9", // Erstatt med ditt Sanity-prosjekt-ID
  dataset: "production",
  useCdn: false, // Sett til "false" hvis du vil ha ferske data
  apiVersion: "2024-03-05",
});

export default sanityClient;

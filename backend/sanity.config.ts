import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import questionnaire from "./schemaTypes/questionnaire";

export default defineConfig({
  name: "default",
  title: "Bachelor",
  projectId: "wips94o9", 
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [questionnaire], 
  },
});

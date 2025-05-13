// sanity/schemas/questionnaire.ts
import { defineType } from "sanity";

export default defineType({
  name: "questionnaire",
  title: "Spørreskjema",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Rekkefølge",
      type: "number", // 🔑 brukes for sortering
      validation: (Rule) => Rule.required().min(1)
    },
    {
      name: "title",
      title: "Tittel",
      type: "object",
      fields: [
        { name: "nb", title: "Norsk", type: "string" },
        { name: "en", title: "Engelsk", type: "string" }
      ]
    },
    {
      name: "questions",
      title: "Spørsmål",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              title: "Spørsmålstekst",
              type: "object",
              fields: [
                { name: "nb", title: "Norsk", type: "string" },
                { name: "en", title: "Engelsk", type: "string" }
              ]
            },
            {
              name: "options",
              title: "Svaralternativer",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "label",
                      title: "Svartekst",
                      type: "object",
                      fields: [
                        { name: "nb", title: "Norsk", type: "string" },
                        { name: "en", title: "Engelsk", type: "string" }
                      ]
                    },
                    { name: "value", title: "Verdi", type: "string" },
                    {
                      name: "responseType",
                      title: "Respons-type",
                      type: "string",
                      options: {
                        list: [
                          { title: "Grønn", value: "green" },
                          { title: "Gul", value: "yellow" },
                          { title: "Rød", value: "red" }
                        ]
                      }
                    },
                    {
                      name: "feedback",
                      title: "Tilbakemelding",
                      type: "object",
                      fields: [
                        { name: "nb", title: "Norsk", type: "string" },
                        { name: "en", title: "Engelsk", type: "string" }
                      ]
                    },
                    {
                      name: "articleUrl",
                      title: "Lenke (valgfri)",
                      type: "url"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});

import { defineType } from "sanity";

export default defineType({
  name: "questionnaire",
  title: "Spørreskjema",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
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
              type: "string",
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
                      title: "Svartekst (f.eks. Ja, Nei)",
                      type: "string",
                    },
                    {
                      name: "value",
                      title: "Intern verdi (f.eks. yes, no)",
                      type: "string",
                    },
                    {
                      name: "responseType",
                      title: "Respons-type",
                      type: "string",
                      options: {
                        list: [
                          { title: "Grønn (fortsett)", value: "green" },
                          { title: "Gul (forsiktig)", value: "yellow" },
                          { title: "Rød (stopp)", value: "red" },
                        ],
                      },
                    },
                    {
                      name: "feedback",
                      title: "Tilbakemelding / melding",
                      type: "string",
                    },
                    {
                      name: "articleUrl",
                      title: "Les mer-lenke (valgfritt)",
                      type: "url",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

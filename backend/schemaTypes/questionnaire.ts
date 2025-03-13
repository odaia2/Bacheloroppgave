import { defineType, defineField } from "sanity";

export default defineType({
  name: "questionnaire",
  title: "Questionnaire",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "questions",
      title: "Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({
              name: "options",
              title: "Options",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
  ],
});

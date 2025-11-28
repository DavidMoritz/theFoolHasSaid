import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'options',
              title: 'Answer Options',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.required().min(2).max(6),
            },
            {
              name: 'correctAnswer',
              title: 'Correct Answer (0-based index)',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'explanation',
              title: 'Explanation',
              type: 'text',
              rows: 3,
              description: 'Optional explanation shown after answering',
            },
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      questions: 'questions',
    },
    prepare(selection) {
      const { title, questions } = selection
      const questionCount = questions ? questions.length : 0
      return {
        title,
        subtitle: `${questionCount} question${questionCount !== 1 ? 's' : ''}`,
      }
    },
  },
})

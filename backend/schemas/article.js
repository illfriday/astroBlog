export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'categories',
      type: 'array',
      of: [{type: 'string', title: 'Category'}],
      title: 'Categories',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
    },
  ],
}

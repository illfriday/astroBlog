export default async function GetAllBlogposts() {
  const postItems = await fetch(
    `http://localhost:1337/api/posts?populate[author][sort][0]&populate[categories][sort][0]`
  ).then((res) => res.json());
  console.log(postItems.data);
  let blogpostsFormatted = postItems.data.map((item) => {
    const categories = [];
    const catData = item.attributes.categories.data;
    //if there is data for the post categories, push it to the cat[]
    if (catData) {
      catData.map((cat) => {
        let tag = cat.attributes.name;
        categories.push(tag);
      });
    }
    return {
      id: parseInt(item.id),
      title: item.attributes.title,
      description: item.attributes.description,
      publishedAt: item.attributes.publishedAt,
      author: item.attributes.author.data.attributes.name,
      categories: categories,
      content: item.attributes.content,
      slug: item.attributes.slug,
    };
  });

  return blogpostsFormatted;
}

export default async function GetBlogpostBySlug(slug) {
  const postItem = await fetch(
    `http://localhost:1337/api/posts?populate[author][sort][0]&populate[categories][sort][0][filters][slug][$eq]=${slug}`
  ).then((res) => res.json());
  const categories = [];
  const catData = postItem.data[0].categories;
  //if there is data for the post categories, push it to the cat[]
  if (catData) {
    catData.map((cat) => {
      let tag = cat.attributes.name;
      categories.push(tag);
    });
  }
  // console.log(postItem.data[0].attributes.title)
  // let postItemTags = [];
  // const pushTags = () => {postItem.data[0].attributes.categories.data.map(postTag => postItemTags.push(postTag.attributes.name))};pushTags();
  // ;
  return {
    title: postItem.data[0].attributes.title,

    publishedAt: postItem.data[0].attributes.publishedAt,
    author: postItem.data[0].attributes.author.data.attributes.name,
    categories: categories,
    content: postItem.data[0].attributes.content,
    slug: postItem.data[0].attributes.slug,
  };
}

export default async function GetBlogpostBySlug(slug) {
  const postItem = await fetch(
    `https://6n7ix93k.api.sanity.io/v2021-10-21/data/query/production?query=*[slug == "${slug}"]`
  ).then((res) => res.json());

  // console.log(postItem.data[0].attributes.title)
  // let postItemTags = [];
  // const pushTags = () => {postItem.data[0].attributes.categories.data.map(postTag => postItemTags.push(postTag.attributes.name))};pushTags();
  // ;
  // console.log(postItem.result[0]);
  return {
    title: postItem.result[0].title,
    publishedAt: postItem.result[0]._createdAt,
    author: postItem.result[0].author,
    categories: postItem.result[0].categories,
    content: postItem.result[0].content,
    slug: postItem.result[0].slug,
  };
}

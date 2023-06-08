export default async function GetAllBlogposts() {
  const postItems = await fetch(
    `https://6n7ix93k.api.sanity.io/v2021-10-21/data/query/production?query=*[_type == 'article']`
  ).then((res) => res.json());
  // console.log(postItems);
  let blogpostsFormatted = postItems.result.map((post) => {
    //   // const categories = [];
    //   // const catData = item.attributes.categories.data;
    //   // //if there is data for the post categories, push it to the cat[]
    //   // if (catData) {
    //   //   catData.map((cat) => {
    //   //     let tag = cat.attributes.name;
    //   //     categories.push(tag);
    //   //   });
    //   // }
    return {
      id: post.id,
      title: post.title,
      description: post.description,
      publishedAt: post._createdAt,
      author: post.author,
      categories: post.categories,
      content: post.content,
      slug: post.slug,
    };
  });

  return blogpostsFormatted;
}

import GetAllBlogposts from "./GetAllBlogposts";

export default async function GetBlogpostsByCategory(category) {
  const data = await fetch(GetAllBlogposts()).then((res) => res.json())

  const postsInCat = [];
  const catData = data.map((post) => {
    if (post.categories.includes(category)) {
      postsInCat.push(post);
    }
  })
  // const catData = await fetch(
  //   `http://localhost:1337/api/categories?populate[posts][sort][0]`
  // ).then((res) => res.json());
  // // console.log(catData.data);
  // let blogpostsInCat = catData.data.map((cat) => {
    
  //   //if there is data for the post categories, push it to the cat[]
  //   if (catData) {
  //     catData.map((cat) => {
  //       let tag = cat.attributes.name;
  //       categories.push(tag);
  //     });
  //   }
  let blogpostsFormatted = postsInCat.map((post) => {
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

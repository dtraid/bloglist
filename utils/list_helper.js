const dummy = (blogs) => 1;

const favoriteBlog = (blogList) =>
  blogList.reduce((mostLiked, blog) =>
    blog.likes > mostLiked.likes ? blog : mostLiked
  );

const authorCounts = (blogList) =>
  blogList.reduce((acc, blog) => {
    if (acc[blog.author]) {
      return {
        ...acc,
        [blog.author]: {
          blogs: acc[blog.author].blogs + 1,
          likes: acc[blog.author].likes + blog.likes,
        },
      };
    }

    return { ...acc, [blog.author]: { blogs: 1, likes: blog.likes } };
  }, {});

const mostBlogs = (blogList) => {
  const counts = authorCounts(blogList);
  const authors = Object.keys(counts).map((e) => {
    return { author: e, blogs: counts[e].blogs };
  });

  return authors.reduce((acc, curr) => (curr.blogs > acc.blogs ? curr : acc));
};

const totalLikes = (blogList) =>
  blogList.reduce((acc, blog) => acc + blog.likes, 0);

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};

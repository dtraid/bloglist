const dummy = (blogs) => 1;

const favoriteBlog = (blogList) =>
  blogList.reduce(
    (mostLiked, blog) => (blog.likes > mostLiked.likes ? blog : mostLiked),
    {
      likes: -1,
    }
  );

const totalLikes = (blogList) =>
  blogList.reduce((acc, blog) => acc + blog.likes, 0);

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};

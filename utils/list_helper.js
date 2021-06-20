const dummy = (blogs) => 1;

const totalLikes = (blogList) =>
  blogList.reduce((acc, blog) => acc + blog.likes, 0);

module.exports = {
  dummy,
  totalLikes,
};

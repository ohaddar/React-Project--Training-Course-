import "./Article.css";
function Article({ children, className }) {
  return <article className={className}>{children}</article>;
}

export default Article;

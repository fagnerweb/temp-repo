import './style.css';

export const PostCard = ({ post }) => (
    <div className="post">
        <img src={post.cover} alt={post.title} />
        <article className="post-content">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    </div>
);
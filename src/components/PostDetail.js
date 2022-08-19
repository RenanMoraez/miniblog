import styles from "./PostDetail.module.css";
import {Link} from "react-router-dom"

const PostDetail = ({post}) => {
  return (
    <div className={styles.post_detail}>
        <img src={post.image} alt={post.title} />
        <h3>{post.title}</h3>
        <p className={styles.post_detail_body}>{post.body}</p>
        <p className={styles.createby}>Escrito por: {post.createdBy}</p>
        <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
                <p key={tag}><span>#</span>{tag}</p>
            ))}
        </div>
        <div className="post_detail_link">
          <Link className="btn btn-outline" to={`/posts/${post.id}`}>Ler Mais</Link>
        </div>
    </div>
  )
}

export default PostDetail
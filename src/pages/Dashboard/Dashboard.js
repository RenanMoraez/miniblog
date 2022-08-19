import styles from "./Dashboard.module.css";
import { BsFillEyeFill, BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useAuthValue} from "../../context/AuthContext";
import {useFetchDocuments} from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {

  const {user} = useAuthValue();
  const uid = user.uid;
  
  const {documents: posts, loading} = useFetchDocuments("posts", null, uid);

  const {deleteDocument} = useDeleteDocument("posts");

  if(loading) {
    return <p>Carregando ...</p>
  }


  return (
    <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className="btn"> Criar Primeiro Post</Link>
          </div>
        ) : (
          <>
          <div className={styles.post_header}>
            <span>Titulo</span>
            <span>Ações</span>
          </div>
          {posts && posts.map((post) => (
          <div key={post.id}  className={styles.post_row}>
            <p>{post.title}</p>
            <div>
              <Link to={`/posts/${post.id}`} className="btn btn-success"><BsFillEyeFill/></Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-warning"><BsPencilSquare/></Link>
              <button onClick={()=> deleteDocument(post.id) } className="btn btn-danger"><BsTrash/></button>
            </div>
          </div>))}
          </>
        )}

    </div>
  )
}

export default Dashboard
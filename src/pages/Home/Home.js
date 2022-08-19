// css componentizado
import styles from "./Home.module.css";
import { useNavigate, Link} from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import PostDetail from "../../components/PostDetail";


// components

const Home = () => {
  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocuments("posts")
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(query){
      return navigate(`/search?q=${query}`)
    }
  }
  return (
    <div className={styles.home}>
       <h4>Veja os nossos posts mais recentes 😉</h4>
       <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder="O que tu quer já ?" onChange={(e) => setQuery(e.target.value)}/>
        <button className="btn">Pesquisar</button>
       </form>
       <div>
          {loading && <p>Carregando ...</p>}
          {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
               <p>Não foram encontrados Posts</p>
               <Link to="/posts/create" className="btn">Criar primeiro post</Link>
            </div>
          )}
       </div>
    </div>
  )
}

export default Home
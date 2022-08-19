import styles from "./Login.module.css";
import imgLogo from "./favicon.png"
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";



const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login, error: authError, loading} = useAuthentication();
  
  const handleSubmit = async (e) =>{
    e.preventDefault();

    setError("")

    const user = {
          email,
      password
    }

    const res = await login(user)

    console.log(res)
  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])
  return (
    <div className={styles.login}>
      <img src={imgLogo} alt="logo" />
       <h2 className={styles.title}>Entrar</h2>
        <p className={styles.subTitle}>Faça o seu login</p>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <label>
              <span>E-mail:</span>
              <input 
              type="email" 
              name="email" 
              required 
              placeholder="Insira o seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
              <span>Senha:</span>
              <input 
              type="password" 
              name="password" 
              required 
              placeholder="Insira a sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </label>
          {!loading && <button className="btn"> Entrar</button>}
          {loading && <button className="btn" disabled> Aguarde</button>}
        </form>
    </div>
  )
}

export default Login
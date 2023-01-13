import{Link} from 'react-router-dom'
import styles from './LoginPage.module.css'

function Login() {
  
  return (
    
    <>
      <div className={styles.background}>
        <div className={styles.container}>

          <p>Your Email</p>
          <br></br>
          <input type="email" className={styles.text} placeholder="e.g. johhny@gmail.com " />
          <br></br><br></br><br></br>
          
          <p>Your Password</p>
          <br></br>
          <input type="password" className={styles.text} placeholder="e.g. password123" />

          <br></br><br></br><br></br>
          <input type="submit" className={styles.loginbtn} value="Login"/>

          <br></br><br></br>
          <div>
            <Link className={styles.link} to="/Registration">Don't Have an account? Click Here to Register</Link>
          </div>

        </div>
        </div>
    </>
  );
}

export default Login;

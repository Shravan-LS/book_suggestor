import {useParams} from 'react-router-dom'
import styles from './RegistrationPage.module.css'

function Registration() {
    
    return (
      <>

            <div className={styles.background}>

              {/* <div>
                <img src="https://www.stylist.co.uk/images/app/uploads/2019/12/17162852/the-end-of-a-book-1268x845.jpeg?w=1200&h=1&fit=max&auto=format%2Ccompress"></img>
              </div> */}

              <div className={styles.container}>
              <input type="text" className={styles.input} placeholder="Enter Name" ></input>
              <br></br>

              <span className={styles.gender}>Male  </span> <input type="radio" name="gender"></input> 
               <span className={styles.gender}>| Female</span> <input type="radio" name="gender"></input>
              <br></br>
              
              <input type="email" className={styles.input} placeholder="Enter Email Id" ></input>
              <br></br>

              <input type="password" className={styles.input} placeholder="Password" ></input>
              <br></br>

              <input type="password" className={styles.input} placeholder="Re-type Password" ></input>
              <br></br>

              <input type="contact" className={styles.input} placeholder="Contact Number" ></input>
              <br></br>

              <input type="checkbox"></input>
              
              <a href="#" className={styles.link}> I agree the Terms and Conditions</a>
              <br></br>

              <input type="submit" className={styles.submit} value="REGISTER"></input>
              </div>

            </div>

      </>
    );
  }
  
  export default Registration;
  
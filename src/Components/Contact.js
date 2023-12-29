import { FiInstagram, FiGithub, FiMail} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa6";

function Contact() {
   return (
      <>
         <div className="contact" id="contact">
            <div className="content">
               <h2>Contact</h2>
               <div className="social">
                  <div className="card">
                     <div className="icon">
                        <FiInstagram />
                     </div>
                     <p>nnmadalin</p>
                  </div>
                  <div className="card">
                     <div className="icon">
                     <FiGithub />
                     </div>
                     <p>nnmadalin</p>
                  </div>
                  <div className="card">
                     <div className="icon">
                        <FaDiscord />
                     </div>
                     <p>nnmadalin</p>
                  </div>
                  <div className="card">
                     <div className="icon">
                        <FiMail />
                     </div>
                     <p>neauna.madalin2006@gmail.com</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Contact;

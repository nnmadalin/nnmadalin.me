import { FiInstagram, FiGithub, FiMail} from "react-icons/fi";

function Navbar() {
   return (
      <nav>
         <div className="components">
            <h2>Neaună Mădălin</h2>
         </div>

         <div className="components">
            <a href="https://www.instagram.com/nnmadalin" target="_blank"><FiInstagram /></a>
            <a href="https://github.com/nnmadalin" target="_blank"><FiGithub /></a>
            <a href="mailto:neauna.madalin2006@gmail.com" target="_blank"><FiMail /></a>
         </div>
      </nav>
   );
}

export default Navbar;

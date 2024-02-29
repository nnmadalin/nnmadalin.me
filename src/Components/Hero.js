import { useEffect, useState } from "react";

import { FiInstagram, FiGithub, FiMail, FiFigma} from "react-icons/fi";
import { PiFigmaLogoDuotone, PiStudentFill } from "react-icons/pi";
import { SiReact } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { BsCalendar2Date } from "react-icons/bs";

import MadalinFoto from '../assets/Images/Madalin.jpeg';

function Hero() {

   const [dateNow, setDateNow] = useState(Date.now());

   useEffect(() => {
      const interval = setInterval(() => setDateNow(Date.now()), 1000);
      return () => {
         clearInterval(interval);
      };

   }, []);

   return (
      <>
         <div className='hero'>
            <div className='smallAbout'>
               <h1>👋🏻<span>Hi, I'm Mădălin</span></h1>
               <br /> <br />
               <p>
                  Hello, my name is <b>Neauna Madalin</b>, and I am a young computer enthusiast. I am originally from Botosani, Romania, and I am 
                  currently a student at <b>Regina Maria High School in Dorohoi</b>.
               </p>
               <br />
               <p>
                  Behind the keyboard, I discover the fascinating <b>world of code</b> and <b>technology</b>. I like to explore the secrets of 
                  algorithms and get involved in everything related to tech, from <b>local competitions</b> to <b>personal projects</b> that develop 
                  my skills.
               </p>
               <br />
               <p>
                  I am a <b>dedicated individual</b>, always looking to the future, ready to tackle challenges and build a successful path!
               </p>
            </div>
            <div className="foto">
               <div className="cardMe">
                  <img src={MadalinFoto} draggable="false" />
                  <div className="description">
                     <h2>Neaună Mădălin</h2>
                     <h4>Botoșani, Romania</h4>
                  </div>

                  <div className="iconReact smallCard">
                     <SiReact /> 
                  </div>
                  <div className="iconCPP smallCard">
                     <TbBrandCpp />
                  </div>
                  <div className="iconFigma smallCard">
                     <FiFigma />
                  </div>
                  <div className="iconNodeJS smallCard">
                     <IoLogoJavascript />
                  </div>
                  <div className="iconStudent smallCard">
                     <PiStudentFill />
                  </div>

                  <div className="clock bigCard">
                     <FaClock /> {(new Date(dateNow)).getHours() + ":" + (new Date(dateNow)).getMinutes() + ":"  + (new Date(dateNow)).getSeconds()}
                  </div>
                  <div className="date bigCard">
                     <BsCalendar2Date /> {(new Date(dateNow)).getDate() + "." + ((new Date(dateNow)).getMonth() + 1) + "."  + (new Date(dateNow)).getFullYear()}
                  </div>
                  <div className="country bigCard">
                     <span className="blue">RO</span>
                     <span className="yellow">MAN</span>
                     <span className="red">IA</span>
                  </div>

                  <div className="quote1 bigCard">
                     "What begins badly,
                  </div>
                  <div className="quote2 bigCard">
                     it ends badly!"
                  </div>
               </div>

               </div>
         </div>
      </>
   );
}

export default Hero;

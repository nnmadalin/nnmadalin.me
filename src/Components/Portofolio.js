import { FiCheckCircle , FiGithub, FiCompass } from "react-icons/fi";

import ampr from '../assets/Images/Ampr.png';
import aqip from '../assets/Images/Aqip.png';
import dragisbuchi from '../assets/Images/Dragos Buchi.png';
import lightning from '../assets/Images/Lightning detector.png';
import ned from '../assets/Images/North East Dynamics.png';
import schoolsync from '../assets/Images/SchoolSync.png';
import sepi from '../assets/Images/SEPI.png';
import jboi from '../assets/Images/JBOI - 2022.png';
import weather from '../assets/Images/Weather.png';
import ifab from '../assets/Images/ifab.png';
import spaceExplorer from '../assets/Images/spaceExplorer.png';
import truecheck from '../assets/Images/TrueCheck.png';


function Portofolio() {
   return (
      <>
         <div className="portofolio" id="portofolio">
            <div className="content">
               <h2>Portofolio</h2>

               <div className="card left TrueCheck">
                  <div className="image">
                     <img src={truecheck} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>TrueCheck</h3>
                     <p className="projectDescription">
                     The TrueCheck web platform helps people by detecting potentially malicious sites (phishing, hidden malware, propaganda, etc.), 
                     but also by analyzing the content with the help of artificial intelligence. With the help of the technologies used, we can minimize the risk of fake news!
                     </p>
                     
                     <div className="madeWith">
                        <span>NextJS</span>
                        <span>Tailwindcss</span>
                        <span>Gemini AI</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/true-check" target="_blank">
                           Code <FiGithub />
                        </a>
                        <a href="https://truecheck.nnmadalin.me/" target="_blank">
                           Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>
               
               <div className="card right DragosBuchi">
                  <div className="image">
                     <img src={dragisbuchi} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>Dragoș Buchi's website</h3>
                     <p className="projectDescription">
                     Welcome! My name is Dragos Buchi, a videographer passionate about the art of capturing and turning moments into authentic 
                     and memorable visual stories. I am dedicated to bringing life to every frame and creating content that inspires and excites.
                     </p>
                     
                     <div className="madeWith">
                        <span>React</span>
                        <span>Css</span>
                        <span>NodeJS</span>
                        <span>Mysql</span>
                     </div>

                     <div className="action">
                        <a href="https://dragosbuchi.ro/" target="_blank">
                           Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card left Sepi">
                  <div className="image">
                     <img src={sepi} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>SEPI</h3>
                     <p className="projectDescription">
                        SEPI website - Society for Excellence and Performance in Informatics; The official website of the Informatics Olympiad from Romania
                     </p>
                     
                     <div className="madeWith">
                        <span>Html</span>
                        <span>Css</span>
                        <span>JavaScript</span>
                        <span>Php</span>
                        <span>Mysql</span>
                     </div>

                     <div className="action">
                        <a href="https://sepi.ro/" target="_blank">
                           Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card right Jboi">
                  <div className="image">
                     <img src={jboi} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>JBOI 2022</h3>
                     <p className="projectDescription">
                     The website of the Junior Balkan Olympiad in Informatics that took place in Dorohoi, Botosani county, Romania
                     </p>
                     
                     <div className="madeWith">
                        <span>HTML</span>
                        <span>Css</span>
                        <span>JavaScript</span>
                        <span>PHP</span>
                        <span>MYSQL</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/JBOI-2022" target="_blank">
                           Code <FiGithub />
                        </a>

                        <a href="https://jboi2022.lrmd.ro/" target="_blank">
                        Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card left NED">
                  <div className="image">
                     <img src={ned} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>NED - North East Dynamics</h3>
                     <p className="projectDescription">
                        The robotics team, participating in the FTC, from Dorohoi, Botosani county, Romania
                     </p>
                     
                     <div className="madeWith">
                        <span>React</span>
                        <span>Css</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/northeastdynamics" target="_blank">
                           Code <FiGithub />
                        </a>

                        <a href="https://www.northeastdynamics.ro/" target="_blank">
                        Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>
               
               <div className="card right SchoolSync">
                  <div className="image">
                     <img src={schoolsync} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>SchoolSync</h3>
                     <p className="projectDescription">
                        SchoolSync is an innovative educational application that facilitates communication and collaboration between students 
                        and teachers. This aims to increase the efficiency of the learning process and improve the educational experience in general.
                     </p>
                     
                     <div className="madeWith">
                        <span>C#</span>
                        <span>.NET</span>
                        <span>PHP</span>
                        <span>Html</span>
                        <span>Css</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/SchoolSync" target="_blank">
                           Code <FiGithub />
                        </a>

                        <a href="https://schoolsync.nnmadalin.me/" target="_blank">
                        Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card left AMPR">
                  <div className="image">
                  <img src={ampr} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>AMPR - Weather alerts for Romania</h3>
                     <p className="projectDescription">
                        An application that provides notifications about severe weather alerts in Romania. (For the API that provides real-time alerts, 
                        link below!)
                     </p>
                     
                     <div className="madeWith">
                        <span>React</span>
                        <span>Css</span>
                        <span>Python</span>
                     </div>

                     <div className="action">
                        <a href="https://api.nnmadalin.me/ampr/" target="_blank">
                           API <FiCompass />
                        </a>

                        <a href="https://github.com/nnmadalin/real_time_alerts_ro" target="_blank">
                           Code <FiGithub />
                        </a>

                        <a href="https://ampr.nnmadalin.me/" target="_blank">
                           Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card right Weather">
                  <div className="image">
                     <img src={weather} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>Weather app</h3>
                     <p className="projectDescription">
                        An application that displays the weather where you are in real time!
                     </p>
                     
                     <div className="madeWith">
                        <span>React</span>
                        <span>Css</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/weather_app" target="_blank">
                           Code <FiGithub />
                        </a>

                        <a href="https://weather.nnmadalin.me/" target="_blank">
                           Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card left Lightning">
                  <div className="image">
                     <img src={lightning} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>Lightning detection application</h3>
                     <p className="projectDescription">
                     A website that can detect, with an approximation of 500m, where there was lightning!
                     </p>
                     
                     <div className="madeWith">
                        <span>React</span>
                        <span>Css</span>
                        <span>NodeJS</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/lightning_app" target="_blank">
                           Code <FiGithub />
                        </a>

                        <a href="https://lightning.nnmadalin.me/" target="_blank">
                           Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card right AQIP">
                  <div className="image">
                     <img src={aqip} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>AQIP - Air Quality in Ploiesti</h3>
                     <p className="projectDescription">
                        The envision competition is a 24-hour programming marathon addressed to young people from all over the country in which 
                        participants will create intelligent solutions for the community problems of Romanian cities. 
                     </p>
                     
                     <div className="madeWith">
                        <span>React</span>
                        <span>Css</span>
                        <span>NodeJS</span>
                        <span>Mysql</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/Code-Envision" target="_blank">
                           Code <FiGithub />
                        </a>

                        <a href="https://aqip.nnmadalin.me/" target="_blank">
                           Website <FiCheckCircle />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card left InviteForaBreak">
                  <div className="image">
                     <img src={ifab} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>Invite for a break - ITMarathon</h3>
                     <p className="projectDescription">
                     ITMarathon was a 12-hour competition. We had to create an application where we could request a break. With this, I got the 1st place!
                     </p>
                     
                     <div className="madeWith">
                        <span>C#</span>
                        <span>Sql</span>
                        <span>.NET</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/Invite-for-a-break---ITMarathon" target="_blank">
                           Code <FiGithub />
                        </a>
                     </div>
                  </div>
               </div>

               <div className="card right Space Explorer">
                  <div className="image">
                     <img src={spaceExplorer} alt="img"  draggable="false"/>
                  </div>
                  <div className="description">
                     <h3>Space Explorer - PROSOFT@NT</h3>
                     <p className="projectDescription">
                        The Space Explorer is an innovative application, in which students and teachers can create and manage lessons, later being 
                        able to create and test them. I got 1st place with this application!
                     </p>
                     
                     <div className="madeWith">
                        <span>C#</span>
                        <span>.NET</span>
                        <span>GCP (sql)</span>
                     </div>

                     <div className="action">
                        <a href="https://github.com/nnmadalin/PROSOFT-NT---Exploratorul-Spatiului" target="_blank">
                           Code <FiGithub />
                        </a>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </>
   );
}

export default Portofolio;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/landing.css';
import opai from "../images/opai.png";

function landing(){
  return(
    <div id="page-map">
    <aside>
      <header>
        <h2>Leonardo Kenji Sato</h2>
        <p className="wellcome">About Me Myself and I!</p>
        <p>I'm Leo, 18years old, a passionate guy who loves any kind of tecnology more than any other thing.</p> 
        <p>I'm Thecnical in Web Developing(Informatica para Internet) by ETEC LAURO GOMES.</p>
        <p>In there I learnd how to build a WebSite by zero using HTML,CSS,PHP,MySql.</p>
        <p>Now i'm Learning about React Js, actually this site had been builden with React.</p>
        <p>I did one api with NodeJs to back-end to a workshop offered by RocketSeat named of Next Level Week (I pretend to do all nexts NLW events).</p>     
        </header>
      <footer>
      <table>
  <tr>
    <td>
        <a href="https://www.linkedin.com/in/leonardo-kenji-sato-0a495a1b7/">My LinkedIn</a>
        <Link to="/app" className="enter-app"><a>Resume</a></Link>
        <a href="https://github.com/LeooSato">GitHub</a>
        </td>
        <td>
        <img src={opai} className="opai"/>
        </td>
  </tr>
  </table>    
  </footer>
    </aside>

  </div>
  )
}

export default landing;
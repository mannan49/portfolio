import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiTwotoneApi } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
const Experience = () => {
  return (
    <section id="experiences">
      <h5> What Skills I have </h5>
      <h2> My Experience </h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillHtml5 className="experience_details_icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCss3 className="experience_details_icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiJavascript className="experience_details_icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsBootstrapFill className="experience_details_icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <SiTailwindcss className="experience_details_icons" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details_icons" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>What I know In React</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiRedux className="experience_details_icons" />
              <div>
                <h4>Redux Toolkit </h4>
                <small className="text-light">State Managment</small>
              </div>
            </article>
            <article className="experience_details">
              <AiTwotoneApi className="experience_details_icons" />
              <div>
                <h4>Axios</h4>
                <small className="text-light">API integration</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icons" />
              <div>
                <h4>React Router</h4>
                <small className="text-light">Dynamic Routing</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb className="experience_details_icons" />
              <div>
                <h4>MERN</h4>
                <small className="text-light">Basics of Backend</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className="experience_details_icons" />
              <div>
                <h4>Responsiveness</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

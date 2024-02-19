import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
// import img6 from "../../assets/img6.jpg";

const data = [
  {
    id: 1,
    image: img4,
    title: "Quiz Mine Web App",
    description:
      "Built a quiz site for students of matric and intermediate contain login/signup functionality, user can select test of every chapter of Physics, Chemistry, Biology etc. and at the end result is displayed in the form of performance percentage. Tech Stack: React, React Hot Toast, Nivo Charts, CSS 3, Redux",
    github: "https://github.com/mannan49/quizmine_user.git",
    demo: "https://quizmine-user.vercel.app/login",
  },
  {
    id: 4,
    image: img4,
    title: "Quiz Mine Dashboard",
    description:
      "For above quiz site, I also created the admin portal through which admin will create, read, update and delete MCQs and can control Quiz Site",
    github: "https://github.com/mannan49/quizmine_dashboard.git",
    demo: "https://quizmine-dashboard.vercel.app/login",
  },
  {
    id: 2,
    image: img2,
    title: "Responsive Admin Dashboard",
    description: "Tech Stack: CSS and Simple JSX",
    github: "https://github.com/mannan49/admin_dashboard.git",
    demo: "https://mannan49.github.io/admin_dashboard/",
  },
  {
    id: 3,
    image: img3,
    title: "Gear Train Website",
    description:
      "Mechanical Engineers have to iterate again and again to find suitable number of teeth of gears, so I write a code that will result all the possibilities of gear teeth for their requirements and they can easily choose according to market availabilit",
    github: "https://github.com/mannan49/gear_train.git",
    demo: "https://mannan49.github.io/gear_train/",
  },
];
const Portfolio = () => {
  return (
    <section id="potfolio">
      <h5> My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className="container portfoio_container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} srcset="" />
              </div>
              <div>
                <h3 id="portfolio_item_heading"> {title} </h3>
                <h5>{description}</h5>
              </div>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

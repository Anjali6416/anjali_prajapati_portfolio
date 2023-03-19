import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../About/About";
import { projects } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import imageabc from "../../assets/anjimg.png"
const Home = ({ scrollRef }) => {
  
  const [projectArray, setProjectArray] = useState(projects.slice(0, 4));
  const { newTheme } = React.useContext(ThemeContext);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(0);
  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  console.log(offset);
  

  return (
    <div ref={scrollRef}>
      <SideIcons />
      <div
        id="home"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        <div
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{
            color: `${newTheme.para}`,
            transform: `translateX(-${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
        >
          <h1>
            <span>Hi, My name is</span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Anjali Prajapati
            </div>
          </h1>
          <h1>
            I am a goal-oriented, productive and aspiring MERN-Stack web
            developer. Excited to become an integral part of an organization.
            {/* and make a significant contribution to its innovations. */}
          </h1>
          {/* <div className={styles.btn}>
						<a
							href='https://drive.google.com/drive/folders/1rIHbr5o1bgroXjXbI8WQeFFbS6UObNjE' // Resume
							target='blank'
						>
							<Button
								text={
									<span className={styles.resumeBtn}>
										<span>Resume</span>{' '}
										<i className='fas fa-file-download'></i>
									</span>
								}
								handleButton={handleButton}
							/>
						</a>
					</div> */}
        </div>

        <div
          style={{
            transform: `translateX(${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
          className={styles.profileImage}
        >
          <img src= {imageabc} alt='image' />
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.ience}
      >
        <About />
      </div>

      <div id="skills" className={styles.techStacks}>
        <TechStacks />
      </div>

      {/* <div
        id="experience"
        className={styles.experience}
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          style={{ color: `${newTheme.para}` }}
        >
          <Experiences />
        </div>
      </div> */}

      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Things I've Developed
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;

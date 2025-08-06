import SectionTitle from "../sectionTitle/SectionTitle";
import Education from "./Education";
import { Awards } from "../../data/awards";
import "./Skills.css";
import Skills from "./Skills";

const Skillsinfo = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <SectionTitle title="Skills" subtitle="Skills" />

        <div className="inner-content">
          {/* Описание */}
          <div
            className="skills-description"
            style={{ opacity: 1, transform: "none" }}
          >
            <h3>Education & Skills</h3>
            <p>
              Более 10 лет в IT, работал и над проектами связанными с
              администрированием ПО, так же обслуживание
            </p>
          </div>

          {/* Блок с образованием, скиллами и наградами */}
          <div className="skills-info education-all">
            {/* Образование */}
            <div style={{ opacity: 1, transform: "none" }}>
              <Education />
              <Skills />
            </div>

            {/* Навыки */}

            {/* Награды или достижения */}
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="education">
                <h4 className="label">Professional Skills Summary</h4>
                <ul className="education-list">
                  {Awards.map((item, index) => (
                    <li className="item" key={index}>
                      <span className="year">{item.year}</span>
                      <p>
                        <span>{item.degree}</span> — {item.institution}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Опыт работы */}
          <div className="education work-exp">
            <h3
              className="work-exp-title"
              style={{ opacity: 1, transform: "none" }}
            >
              Work & Experience
            </h3>
            <div className="skills-info">
              <div className="experience-card">
                <div className="upper">
                  <h3>Sr. Graphic Designer</h3>
                  <h5>Part Time | Office</h5>
                  <span>2020 - 2021</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">Avada Theme</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>

              <div className="experience-card">
                <div className="upper">
                  <h3>Cr. Web Developer</h3>
                  <h5>Full Time | InHouse</h5>
                  <span>2019 - 2020</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">ib-themes ltd.</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>

              <div className="experience-card">
                <div className="upper">
                  <h3>Jr. Web Developer</h3>
                  <h5>Full Time | Remote</h5>
                  <span>2018 - 2019</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">Creative Gigs</h4>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillsinfo;

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
          {/* Description */}
          <div
            className="skills-description"
            style={{ opacity: 1, transform: "none" }}
          >
            <h3>Education & Skills</h3>
            <p>
              Over 10 years in IT, working on projects related to software
              administration, maintenance, and infrastructure support.
            </p>
          </div>

          {/* Education, Skills and Awards */}
          <div className="skills-info education-all">
            {/* Education and Skills */}
            <div style={{ opacity: 1, transform: "none" }}>
              <Education />
              <Skills />
            </div>

            {/* Awards or Achievements */}
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

          {/* Work & Experience */}
          <div className="education work-exp">
            <h3
              className="work-exp-title"
              style={{ opacity: 1, transform: "none" }}
            >
              Work & Experience
            </h3>
            <div className="skills-info">
              {/* Corporate Website */}
              <div className="experience-card">
                <div className="upper">
                  <h3>Corporate Website</h3>
                  <h5>Full Time | Office</h5>
                  <span>2023 – Present</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">ucell.uz</h4>
                <p>
                  Managing the official <strong>ucell.uz</strong> website hosted
                  in
                  <strong> Kubernetes</strong>. Migrated infrastructure to
                  containerized architecture with implemented{" "}
                  <strong>CI/CD pipelines</strong> to ensure high availability
                  and scalability.
                </p>
              </div>

              {/* Customer Portal */}
              <div className="experience-card">
                <div className="upper">
                  <h3>Customer Portal</h3>
                  <h5>Full Time | Remote</h5>
                  <span>2023 – Present</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">lc.ucell.uz</h4>
                <p>
                  Fully migrated the <strong>personal account system</strong> to
                  <strong> CI/CD</strong> and containerization. Maintaining
                  stability, releasing features, and supporting development
                  teams.
                </p>
              </div>

              {/* Mobile Application */}
              <div className="experience-card">
                <div className="upper">
                  <h3>Mobile Application</h3>
                  <h5>Full Time | Office</h5>
                  <span>2023 – Present</span>
                </div>
                <div className="hr"></div>
                <h4 className="label">UCELL App</h4>
                <p>
                  Supporting multiple microservices running in{" "}
                  <strong>Kubernetes</strong>. Working on services related to{" "}
                  <strong>auth</strong>,<strong> payments</strong>, and{" "}
                  <strong>user profile</strong>. Implemented centralized logging
                  and monitoring.
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

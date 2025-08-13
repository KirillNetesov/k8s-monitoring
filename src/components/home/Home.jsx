import "./Home.css";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaArrowCircleRight,
} from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container home-wrapper">
        <div className="media-icons">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

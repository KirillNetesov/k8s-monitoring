import "./Home.css";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaArrowCircleRight,
} from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

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

      <div className="home-info">
        <h1>Привет, меня зовут Кирилл Нетёсов</h1>
        <h3>Я работаю SRE инжинером</h3>
        <p>
          Мы создаем большие проекты в крупном мобильном операторе Узбекистана
          UCELL, я веду проект веб сайт ucell.uz
        </p>
        <a href="" className="home-info-link inner-info-link">
          Contact me <FaArrowCircleRight />
        </a>
      </div>

      <a href="#about" className="scroll-down">
        Прокрутить <FaArrowDown />
      </a>
    </section>
  );
};

export default Home;

import {
  Header,
  Footer,
  Home,
  Skills,
  About,
  Portfolio,
  Contact,
  Clients,
  Services,
  Aboutme,
  Skillsinfo,
} from "./components/index";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <ThemeToggle />
        <div className="container"></div>
        <div>
          <Aboutme />
          <Skillsinfo />
        </div>
      </main>
    </>
  );
}

export default App;

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

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <div className="container">
          <h3>Резюме Kirill Netesov</h3>
        </div>
        <div>
          <Aboutme />
          <Skillsinfo />
        </div>
      </main>
    </>
  );
}

export default App;

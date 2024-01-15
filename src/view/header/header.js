import Navbar from "../../components/navbar/navbar";
import QuemSou from "../../view/main/about";
import Experiencia from "../../view/main/experiencia";
import Portifolio from "../../view/main/portifolio";
import Skills from "../../view/main/skills";
import Contato from "../../view/main/contato";
import styles from "../../styles/scss/global.module.scss";
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//navbar
const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <span className={`${styles.title}`}>
          <div className="main text-center mb-3">
            Hi, I am
            <br />
            <span>
              <strong>Augusto Berbary👋</strong>
            </span>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer",
                  "Tech Enthusiast",
                  "Game Dev Student",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </span>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={QuemSou} />
            <Route path="/experiencia" component={Experiencia} />
            <Route path="/portifolio" component={Portifolio} />
            <Route path="/skills" component={Skills} />
            <Route path="/contato" component={Contato} />
          </Switch>
        </Router>
        <QuemSou sobre="Formado em análise e desenvolvimento de sistemas blablabla"></QuemSou>
        <Experiencia />
        <Portifolio />
        <Skills />
      </div>
    </header>
  );
};

export default Header;

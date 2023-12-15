//crate name

import Card from "../../components/cards/cardAbout";
import Navbar from "../../components/navbar/navbar";
import QuemSou from "../../view/main/about";
import Experiencia from "../../view/main/experiencia";
import Portifolio from "../../view/main/portifolio";
import Skills from "../../view/main/skills";
import Contato from "../../view/main/contato";
import InputToggleDark from "../../components/inputs/inputToggleDark";
import InputToggleLanguage from "../../components/inputs/inputToggleLanguage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//navbar
const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <span>José Augusto de sousa berbary</span>
        <InputToggleLanguage />
        <InputToggleDark />
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about" component={QuemSou} />
            <Route path="/experiencia" component={Experiencia} />
            <Route path="/portifolio" component={Portifolio} />
            <Route path="/skills" component={Skills} />
            <Route path="/contato" component={Contato} />
          </Switch>
          <QuemSou sobre="Formado em análise e desenvolvimento de sistemas blablabla"></QuemSou>
          <Experiencia />
        </Router>
      </div>
    </header>
  );
};

export default Header;

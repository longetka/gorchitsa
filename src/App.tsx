import React, {FC} from 'react';
import logo from './assets/images/logo.png';
import heroImage from './assets/images/hero-image.png';
import './assets/styles/index.scss';
import { Logo } from './components/Navigation/Logo';
import { Menu } from './components/Navigation/Menu';
import { Navigation } from './components/Navigation/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Main } from './pages/Main';
import { Footer } from './components/Footer/Footer';
import { Price } from './pages/Price';
import { Gallery } from './pages/Gallery';
import { Contacts } from './pages/Contacts';

const App: FC = () => {
  return (
    <Router>
      <div>
        <Navigation>
          <Logo src={logo} alt="Gorchitsa logotype" />
          <Menu />
        </Navigation>
          <Switch>
            <Route exact path="/">
              <Main 
                src={heroImage} 
                alt="Alena Cherepanova"
                heroTitle="Приятно познакомитсья. Меня зовут Алёна."
                heroDescription="Я левша во всех смыслах этого слова."
                heroFeatures={
                  [
                    'наращивание - на долго,', 
                    'брови - лёжа,', 
                    'ламинирование - круто!'
                  ]
                }
              />
            </Route>
            <Route path="/price">
                <Price />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

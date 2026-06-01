import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import HeaderPol from './CompPol/Header/HeaderPol';
import Panel from './Components/Panel';
import PanelPol from './CompPol/PanelPol';
import Main from './Components/Main';
import MainPol from './CompPol/MainPol';
import RegistrationForm from './Components/RegistrationForm';
import SplashCursor from './Components/Bits/SplashCursor';
import Settings from './Components/Settings';

function App() {
  const [set, setSet] = useState(false)
  const [spcur, setCurrentSpcur] = useState(false)
  const [currentLang, setCurrentLang] = useState('English')
  const [isRegistered, setIsRegistered] = useState(false)
  const [user, setUserValues] = useState(() => {
    const savedUser = localStorage.getItem('weather_app_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [toShow, setToShow] = useState(1)

  useEffect(() => {
    if (user) {
      localStorage.setItem('weather_app_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('weather_app_user');
    }
  }, [user]);



  return (<div className='App-wrap'>
    {spcur && <SplashCursor
      DENSITY_DISSIPATION={1}
      VELOCITY_DISSIPATION={2}
      PRESSURE={1}
      CURL={3}
      SPLAT_RADIUS={0.01}
      SPLAT_FORCE={6000}
      COLOR_UPDATE_SPEED={10}
      SHADING
      RAINBOW_MODE={false}
      COLOR="#A855F7"
    />}
    <div className='App'>

      {currentLang === 'English' && <Panel setSet={setSet} setToShow={setToShow}></Panel>}
      {currentLang === 'Polski' && <PanelPol setSet={setSet} setToShow={setToShow}></PanelPol>}
      {set && <Settings spcur={spcur} setSpcur={setCurrentSpcur} setSet={setSet} />}

      <div>{currentLang === 'English' && <Header setIsReg={setIsRegistered} user={user} scur={setCurrentLang} cr={currentLang}></Header>}
        {currentLang === 'Polski' && <HeaderPol setIsReg={setIsRegistered} user={user} scur={setCurrentLang} cr={currentLang}></HeaderPol>}
        {isRegistered && <div className='outframe' ><div className='modal'><RegistrationForm setValues={setUserValues} setOp={setIsRegistered} /></div></div>}
        {currentLang === 'English' && <Main toShow={toShow}></Main>}
        {currentLang === 'Polski' && <MainPol toShow={toShow}></MainPol>}
      </div>
    </div>

  </div>);
}

export default App;

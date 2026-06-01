import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Panel from './Components/Panel';
import Main from './Components/Main';
import RegistrationForm from './Components/RegistrationForm';

function App() {
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
    <div className='App'>
      <Panel setToShow={setToShow}></Panel>
      <div><Header cr={currentLang} scur={setCurrentLang} user={user} isReg={isRegistered} setIsReg={setIsRegistered}></Header>
        {isRegistered && <div className='outframe' ><div className='modal'><RegistrationForm setValues={setUserValues} setOp={setIsRegistered} /></div></div>}
        <Main></Main>
      </div>
    </div>
  </div>);
}

export default App;

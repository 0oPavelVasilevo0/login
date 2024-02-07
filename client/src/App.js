import './App.css';
import LoginWindow from './components/LoginWindow';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageForgot from './components/PageForgot';
import UserInfo from './components/UserInfo';
// import { IntlProvider } from 'react-intl'; 



function App() {

  return (
    <div className="App">
      {/* <IntlProvider locale='en' >  */}
        {/* Provide IntlProvider with locale and messages */}

      <Router>
        <Routes>
          <Route exact path="/" element={<LoginWindow />} />
          <Route exact path="/pageforgot" element={<PageForgot />} />
          <Route exact path="/userinfo" element={<UserInfo />} />
        </Routes>
      </Router>
      {/* </IntlProvider> */}
    </div>
  );
}

export default App;

import './App.css';
import LoginWindow from './components/LoginWindow';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageForgot from './components/PageForgot';
import UserInfo from './components/UserInfo';



function App() {
  
  return (
    <div className="App">
      <Router>  
      <Routes>
          <Route exact path="/" element={<LoginWindow  />} />
          <Route exact path="/pageforgot" element={<PageForgot />} />
          <Route exact path="/userinfo" element={<UserInfo />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

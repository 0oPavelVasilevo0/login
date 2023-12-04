import './App.css';
import LoginWindow from './components/LoginWindow';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageForgot from './components/PageForgot';


function App() {
  return (
    <div className="App">
      <Router>
      
      <Routes>
          <Route exact path="/" element={<LoginWindow  />} />
          <Route exact path="/pageforgot" element={<PageForgot />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

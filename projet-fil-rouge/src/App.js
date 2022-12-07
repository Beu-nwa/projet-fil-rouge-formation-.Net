import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import HomeView from './Views/HomeView/HomeView';
import FormationView from './Views/FormationView/FormationView';
import Header from './Components/GlobalComponent/HeaderComp/HeaderComp';
import Footer from './Components/GlobalComponent/FooterComp/FooterComp';
import LogView from './Views/LogView/LogView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/formation" element={<FormationView />} />
              <Route path="/log" element={<LogView />} />
            </Routes>
            <div>
              <Outlet />
            </div>
          </main>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;

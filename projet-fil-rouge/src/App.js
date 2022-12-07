import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import HomeView from './Views/HomeView/HomeView';
import FormationView from './Views/FormationView/FormationView';
import LogView from './Views/LogView/LogView';
import Header from './Components/GlobalComponent/HeaderComp/HeaderComp';
import Footer from './Components/GlobalComponent/FooterComp/FooterComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        activeUser: []
    }
}
changeActiveUser = (user) => {
  this.setState ({
      activeUser: user
  })
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header changeActiveUser={this.changeActiveUser}/>
          <main>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/formation" element={<FormationView/>} />
              <Route path="/log" element={<LogView/>} changeActiveUser={this.changeActiveUser} />
            </Routes>
            <div className="container">
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

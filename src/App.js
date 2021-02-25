
import './App.css';
// import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/HomePage/Home';
// import Footer from './components/pages/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Service from './components/pages/Services/Service';
import About from './components/pages/About/About';
import Careers from './components/pages/Careers/Careers';
import ConatctUs from './components/pages/Contactus/ConatctUs';


//Admin Panel
// import Admin from './admin_panel/admin'
// import Request from './admin_panel/Requests/Request'
// import community from './admin_panel/Community/community'
// import user from './admin_panel/User/user'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      {/* <Navbar /> */}
      <Switch>
      {/* <Route path="/admin-cmapp" exact component={Admin}/> */}
      <Route path="/" exact component={Home}/>
      <Route path="/services" exact component={Service}/>
      <Route path="/about" exact component={About}/>
      <Route path="/career" exact component={Careers}/>
      <Route path="/contact" exact component={ConatctUs}/>
      {/* <Route path='/admin-cmapp/request' exact component={Request} />
      <Route path='/admin-cmapp/community' exact component={community} />
      <Route path='/admin-cmapp/user' exact component={user} /> */}
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;

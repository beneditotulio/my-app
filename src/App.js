import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
        <div>
        <Header />
        <SideBar />
        {/* <Main /> */}
        {/* <NavigationBar />
        <h1>Welcome to my React project</h1> */}
        <Footer />
      </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';
import Content from './Content';

function App() {
  return (
        <div>
        <Header />
        <SideBar />
        <NavigationBar />
        {/* <Content /> */}
        <Footer />
      </div>
  );
}

export default App;

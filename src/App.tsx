import Header from "./component/header";
import Dashboard from "./component/dashboard";
import Footer from "./component/footer";
import './App.scss';

const App = () => {
  return (
    <div className="App">
           <Header/>
           <Dashboard/>
           <Footer/>
    </div>
  );
}

export default App;

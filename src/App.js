import Header from './components/header';
import Home from './components/home';
import Algo from './components/algo';
import Graph from './components/graph';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Algo></Algo>
      <Graph></Graph>
      <Footer></Footer>
    </div>
  );
}

export default App;

import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <main className="app__main">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;

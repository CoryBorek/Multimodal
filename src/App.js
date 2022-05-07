import logo from './logo.svg';
import './App.css';
import Header from './main/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useWindowDimensions from './main/hooks/useWindowDimensions';
import Main from './main/Main';

function App() {

  const {height, width} = useWindowDimensions();

  const year = new Date().getFullYear();
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path = "/essay">
          <iframe src="/essay.pdf" id="Iframe" height={height * 0.9} width="100%"></iframe>
        </Route>
        <Route path="*">
          <Main />
        </Route>

      </Switch>
      <footer>
          <p style={{textAlign: 'center'}}>&copy; {year} Cory Borek. All Rights Reserved.</p>
        </footer>
    </Router>
  );
}

export default App;

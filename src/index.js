
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Header, Footer} from './components';
import { About, Users, Main, Error } from './pages';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// import reportWebVitals from './reportWebVitals';

const theme = createTheme();

const Routing = () => {
  return(
    <Router>
      <div style={{position: 'relative', height: '100vh'}}>
      <Header/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="*" component={Error} />
        </Switch>
      <Footer/>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

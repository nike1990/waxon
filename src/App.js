import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes'
import './App.css';
/*import Header from './components/Header'
import FooterContent from './components/FooterContent'*/

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Header/>*/}
            <div>
                <Switch>
                    {
                        routes.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    exact={item.exact}
                                    path={item.path}
                                    component={item.component}
                                />
                            )
                        })
                    }
                </Switch>
            </div>
          {/*<FooterContent/>*/}
      </div>
    );
  }
}

export default App;

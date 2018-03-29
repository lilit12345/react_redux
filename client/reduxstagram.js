// let's go!
import React from 'react';
import { render } from 'react-dom';


//importing CSS
import css from './styles/style.styl';


//importing components
import Single from './components/Single';
import Photogrid from './components/Photogrid';
import Main from "./components/Main";

//importing react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

//importing store
import store, { history } from './store';



const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Main}>
                <IndexRoute component={Photogrid}/>
                <Route path="/view/:postId" component={Single}/>
            </Route>
        </Router>
    </Provider>

)

render(router, document.getElementById('root'));
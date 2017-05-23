import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ServiceIndex from './components/service_index'
import App from './components/app';
import ServiceDetail from './components/service_detail'

/*
* Nested routing
* */

export default  (
    <Route path="/" component={App}>
        <IndexRoute component={ServiceIndex }/>
        <Route path="/:id" component={ServiceDetail}/>
    </Route>)
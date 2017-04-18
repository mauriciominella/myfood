import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import {Shell} from './shell';
import {ClockPage} from './clock';
import {MealPage} from './meal';
import {GithubPage} from './github';

export let routes = (
    <Route path="/" component={Shell}>
        <IndexRoute component={GithubPage}/>
        <Route path="clock" component={ClockPage}/>
        <Route path="meal" component={MealPage}/>
        <Redirect from="*" to="/"/>
    </Route>
);

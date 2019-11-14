import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'
import FirstComponent from './components/firstcomponent';
import secondcomponent from './components/secondcomponent';
import { Header } from './components/Header';
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/FirstComponent" component={FirstComponent} />
                    <Route path="/secondcomponent" component={secondcomponent}/>
                   
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>

    );
}
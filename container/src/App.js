import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import AuthApp from './components/AuthApp'
import Header from './components/Header'
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({ productionPrefix: "co" })

export default () =>
    <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/auth" component={AuthApp} />
                    <Route path="/" component={MarketingApp} />
                </Switch>
            </div>
        </BrowserRouter>
    </StylesProvider>

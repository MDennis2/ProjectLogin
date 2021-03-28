import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { Footer } from '../screens/components/Footer';
import { Header } from '../screens/components/Header';
import { DownloadScreen } from '../screens/DownloadScreen';
import { HomeScreen } from '../screens/HomeScreen';

export const AppRouter = () => {
    return (
        <>
        <Router>
            <div className="home__main">
                <div className="home__box-container">
                    <Switch>
                        <Route
                            path="/download"
                            component={DownloadScreen}
                        />
                        <Route
                            exact
                            path="/"
                            component={HomeScreen}
                        />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
        </>
    )
}
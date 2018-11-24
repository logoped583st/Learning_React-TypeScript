import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import store from "./reducers/Store";
import {Switch} from "react-router";
import RegistrationComponent from "./components/registation";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Redirect from "react-router/es/Redirect";
import LoginComponent from "./components/login";
import MainPageComponent from "./components/mainpage";


const logo = require('./arrow_up_white.png');


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <h1> Skill Up <img src={logo} alt={"arrow"}/></h1>
                    </header>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/login"
                                   render={() => <LoginComponent header={"asd"} button={"asd"} redirectComponent={"asd"}
                                                                 forgotPassword={false}/>}/>

                            <Route path="/registration"
                                   render={() => <RegistrationComponent header={"asd"} button={"asd"}
                                                                        redirectComponent={"asd"}
                                                                        forgotPassword={false}/>}/>/>

                            <Route path="/tempMaimPage"
                                   render={() => <MainPageComponent
                                       photo={"https://avatars3.githubusercontent.com/u/30079690?s=400&u=e3443b749fa4d36979e0d631192f3a7bbadc3eeb&v=4"}
                                       nickname={"logoped583st"}/>}/>
                            <Redirect from="*" to="/login"/>

                            <Route path="/editProfile"/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;

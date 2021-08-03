import React, {useEffect} from 'react';
import './App.css';
import HelmetLayout from "./layouts/Helmet";
import {Home} from "./containers";
import {useSelector, useDispatch} from "react-redux";
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {BrowserRouter, Route, Switch, Redirect, Link} from "react-router-dom";
import Account from "./utils/helpers/Account";
import Login from "./containers/Home/login/Login";
import Register from "./containers/Home/login/Register";
import {translate} from "./utils/translate";
import Terms from "./containers/Home/Terms/index";
import Privecy from "./containers/Home/Privecy";
import Cookie from "./containers/Home/Cookie";
import Code from "./containers/Home/Code";
import {changeLanguageAction} from "./store/actions/language";



const token = Account.getToken();

function App() {

    const {language} = useSelector(({languageReducer}) => languageReducer)
    const {token} = useSelector(({users}) => users)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('tr', language)

       translate(language);
    }, [language])

    useEffect(() => {
        dispatch(changeLanguageAction('FR'))
    },[])

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="App">
            <HelmetLayout title="Home" metaDescription="home page for shop">
                <BrowserRouter>
                    <Switch>
                        <Route path="/terms-and-conditions">
                            <Terms />
                        </Route>
                        <Route path="/privacy-policy">
                            <Privecy />
                        </Route>
                        <Route path="/cookie-policy">
                            <Cookie />
                        </Route>
                        <Route path="/code-de-conduite">
                            <Code />
                        </Route>
                        <Route path={'/'} exact component={Home} />
                    </Switch>
                </BrowserRouter>
            </HelmetLayout>
        </div>
    );
}

export default App;

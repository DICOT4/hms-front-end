import {Redirect, Route, Switch} from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";
import React, {useEffect, useState} from "react";
import {Spinner} from "reactstrap";


export default function App(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const defaultValue = {name: '', role: 'superAdmin', key: ''};

        const _user = localStorage.getItem('_dicota-r');
        // const _user = localStorage.getItem('_dicota-rr');
        if (_user) {
            try {
                const __user = JSON.parse(_user);
                // console.log(__user);
                setUser({
                    ...defaultValue, ...__user,
                    // role: 'reception'
                });
            } catch (e) {
                console.log(e);
            }
        } else
            setUser(defaultValue);
    }, []);

    return (
        <>
            {
                user ?
                    <Switch>
                        <Route path="/auth" render={(props) => {
                            return !user.email ? <AuthLayout {...props} user={user}/> :
                                <Redirect to="/dashboard/index"/>
                        }}/>
                        <Route path="/dashboard" render={(props) => {
                            return user.email ? <Dashboard {...props} user={user}/> : <Redirect to="/auth/login"/>
                        }}/>
                        <Redirect from="*" to="/dashboard/index"/>
                    </Switch> :
                    <div className="text-center mt-7">
                        <Spinner color="primary"/>
                    </div>
            }
        </>
    )
}
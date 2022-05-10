import {Redirect, Route, Switch} from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";
import React, {useEffect, useState} from "react";
import {Spinner} from "reactstrap";


export default function App(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const defaultValue = {name: '', role: 'doctor'};

        // const _role = localStorage.getItem('_dicota-r');
        const _role = localStorage.getItem('_dicota-rr');
        if (_role)
            setUser({...defaultValue, role: _role});
        else
            setUser(defaultValue);
    }, []);

    return (
        <>
            {
                user ?
                    <Switch>
                        <Route path="/auth" render={(props) => <AuthLayout {...props} />}/>
                        <Route path="/dashboard" render={(props) => <Dashboard {...props} user={user}/>}/>
                        <Redirect from="/" to="/dashboard/index"/>
                    </Switch> :
                    <div className="text-center mt-7">
                        <Spinner color="primary"/>
                    </div>
            }
        </>
    )
}
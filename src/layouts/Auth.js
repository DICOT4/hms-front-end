import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import {Container, Row, Spinner} from "reactstrap";
import _routes from "../routes/index";

const Auth = (props) => {
    const [routes, setRoutes] = useState(null);

    const mainContent = React.useRef(null);
    const location = useLocation();

    useEffect(() => {
        document.body.classList.add("bg-default");
        return () => {
            document.body.classList.remove("bg-default");
        };
    }, []);

    useEffect(() => {
        if (props.user)
            setRoutes(_routes.getRoutes(props.user.role));
    }, [props.user]);

    useEffect(() => {
        if (routes) {
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            mainContent.current.scrollTop = 0;
        }
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => <Route exact path={prop.layout + prop.path} component={prop.component}
                                                key={key}/>);
    };

    return (
        <>
            {
                routes ?
                    <div className="main-content" ref={mainContent}>
                        <div className="header bg-gradient-info py-7 py-lg-8"/>
                        {/* Page content */}
                        <Container className="mt--8 pb-5">
                            <Row className="justify-content-center">
                                <Switch>
                                    {getRoutes(routes)}
                                    <Redirect from="*" to="/auth/login"/>
                                </Switch>
                            </Row>
                        </Container>
                    </div> :
                    <div className="text-center mt-7">
                        <Spinner color="primary"/>
                    </div>
            }
        </>
    );
};

export default Auth;

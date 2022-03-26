import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import _routes from "../routes/index";
import {Spinner} from "reactstrap";

const Dashboard = (props) => {
    const [routes, setRoutes] = useState(null);

    const mainContent = React.useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (props.user)
            setRoutes(_routes.getRoutes(props.user.role));
    }, [props.user]);

    React.useEffect(() => {
        if (routes) {
            document.documentElement.scrollTop = 0;
            document.scrollingElement.scrollTop = 0;
            mainContent.current.scrollTop = 0;
        }
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => <Route path={prop.layout + prop.path} component={prop.component} key={key}/>);
    };

    return (
        <>
            {
                routes ?
                    <>
                        <Sidebar
                            {...props}
                            routes={routes.filter(_route => _route.display)}
                            // logo={{
                            //     innerLink: "/admin/index",
                            //     imgSrc: require("../assets/img/brand/argon-react.png").default,
                            //     imgAlt: "...",
                            // }}
                        />
                        <div className="main-content" ref={mainContent}>

                            <AdminNavbar {...props} />
                            <Switch>
                                {getRoutes(routes)}
                                <Redirect from="*" to="/dashboard/index"/>
                            </Switch>
                        </div>
                    </> :
                    <div className="text-center mt-7">
                        <Spinner color="primary"/>
                    </div>
            }
        </>
    );
};

export default Dashboard;

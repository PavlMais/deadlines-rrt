import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router'



interface PrivateRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
    isLoggedIn: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const { component, isLoggedIn, ...rest } = props;

    

    const routeComponent = (prop: any) => (
        props.isLoggedIn
            ? React.createElement(props.component, prop)
            : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: prop.location }
                }}
            />
    );
    return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
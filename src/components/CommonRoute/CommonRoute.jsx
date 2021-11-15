import { Route } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { LogInWall } from '../LogInWall/LogInWall.jsx'

const CommonRoute = ({ component: Component, rest }) => {

    const { isAuthenticated } = useAuth0();

    return (
        <Route {...rest}> {isAuthenticated
            ? <Component />
            : <LogInWall />}
        </Route>
    )
};

export default CommonRoute;
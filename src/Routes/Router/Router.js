import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default Router;
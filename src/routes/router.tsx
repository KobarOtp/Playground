import { createBrowserRouter } from 'react-router-dom';
import IpOnline from '../pages/App/IpOnline';

let router = createBrowserRouter([
    {
        path: '/', 
        element: <IpOnline />
    }
]); 

export default router;
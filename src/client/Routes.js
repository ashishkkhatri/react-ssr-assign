import LaunchesListPage from './pages/LaunchesListPage';
import App from './App';
import NotFoundPage from './pages/NotfoundPage';
 
export default [
    {
        ...App,
        routes: [
            {
                path:'/',
                ...LaunchesListPage
            },
            {
                ...NotFoundPage
            }
        ]
    }
];

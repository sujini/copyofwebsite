import routes from './routes';
import AsyncSetup from 'react-router-async-routing'

const { Route, Link, Preload } = AsyncSetup(routes, path => import(`pages/${path}.js`));

export { Link, Route, Preload };
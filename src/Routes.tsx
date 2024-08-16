import { Routes as RoutesRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = (): JSX.Element => {
    return (
        <RoutesRouter>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />}/>
            </Route>
        </RoutesRouter>
    )
}

export default Routes
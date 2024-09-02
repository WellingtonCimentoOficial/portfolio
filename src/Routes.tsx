import { Routes as RoutesRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import MainLayout from './layouts/MainLayout/MainLayout'
import ProjectPage from './pages/ProjectPage/ProjectPage'

const Routes = (): JSX.Element => {
    return (
        <RoutesRouter>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />}/>
            </Route>
            <Route path='/project/*' element={<MainLayout />}>
                <Route path=':projectId/:projectName' element={<ProjectPage />}/>
            </Route>
        </RoutesRouter>
    )
}

export default Routes
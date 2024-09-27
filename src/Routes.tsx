import { Routes as RoutesRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import MainLayout from './layouts/MainLayout/MainLayout'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import HeaderSideBarFooterLayout from './layouts/HeaderSideBarFooterLayout/HeaderSideBarFooterLayout'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'
import TermsOfUsePage from './pages/TermsOfUsePage/TermsOfUsePage'

const Routes = (): JSX.Element => {
    return (
        <RoutesRouter>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />}/>
                <Route path='privacy-policy' element={<PrivacyPolicyPage />}/>
                <Route path='terms-of-use' element={<TermsOfUsePage />}/>
            </Route>
            <Route path='/project/*' element={<HeaderSideBarFooterLayout />}>
                <Route path=':projectId/:projectName' element={<ProjectPage />}/>
            </Route>
        </RoutesRouter>
    )
}

export default Routes
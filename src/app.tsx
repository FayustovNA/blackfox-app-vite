import styles from './app.module.css'
import { SideBar } from './components/global/sidebar'
import { Routes, Route } from 'react-router-dom'
import { DashBoard } from './pages/dashboard/dashboard'
import { Statistics } from './pages/statistics/statistics'
import { Library } from './pages/library/library'
import { Settings } from './pages/settings/settings'
import SignIn from './pages/sign-in/sign-in'
import SignUp from './pages/sign-up/sign-up'
import ForgotPassword from './pages/forgot-password/forgot-password'
import ResetPassword from './pages/reset-password/reset-password'
import { ClientsPage } from './pages/clients/clients'


function App() {

  return (
    <>
      <div className={styles.app}>
        <SideBar />
        <main className={styles.conttent}>
          <Routes>
            <Route path='/dashboard' element={<DashBoard />}></Route>
            <Route path='/statistics' element={<Statistics />}></Route>
            <Route path='/settings' element={<Settings />}></Route>
            <Route path='/library' element={<Library />}></Route>
            <Route path='/clients' element={<ClientsPage />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/forgot-password' element={<ForgotPassword />}></Route>
            < Route path='/reset-password' element={<ResetPassword />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App;
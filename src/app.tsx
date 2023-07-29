import { useState } from 'react'
import styles from './app.module.css'
import Logo from './components/logo/logo'
import { SmallWidget } from './components/small-widget/small-widget'
import { UserPanel } from './components/user/user'
import Avatar from './images/avatar.svg'
import { SendReportWidget } from './components/send-report-widget/send-report-widget'
import { LibraryItem } from './components/library-item/library-item'
import { WeekTasks } from './components/week-tasks/week-tasks'
import { SideBar } from './components/global/sidebar'
import { Routes, Route } from 'react-router-dom'
import { DashBoard } from './pages/bf-dashboard/dashboard'
import { Statistics } from './pages/statistics/statistics'
import { Library } from './pages/bf-library/library'
import { Settings } from './pages/settings/settings'


function App() {

  return (
    <>
      <div className={styles.app}>
        <SideBar />
        <main className={styles.conttent}>
          <Routes>
            <Route path='/' element={<DashBoard />}></Route>
            <Route path='/statistics' element={<Statistics />}></Route>
            <Route path='/library' element={<Library />}></Route>
            {/* <Route path='/payouts' element={<Library />}></Route> */}
            <Route path='/settings' element={<Settings />}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App;
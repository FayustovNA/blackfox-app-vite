import { useState } from 'react'
import styles from './app.module.css'
import Logo from './components/logo/logo'
import { SmallWidget } from './components/small-widget/small-widget'
import { UserPanel } from './components/user/user'
import Avatar from './images/avatar.svg'
import { SendReportWidget } from './components/send-report-widget/send-report-widget'
import { LibraryItem } from './components/library-item/library-item'
import { WeekTasks } from './components/week-tasks/week-tasks'


function App() {

  return (
    <>
      {/* Тест карточки клиента и тренера */}
      <div className={styles.test}>

        <UserPanel
          avatar={Avatar}
          fullname={'Николай Фаюстов'}
          location={'Кисловодск'}
          age={22}
          startWeigth={99.3}
          targetWeigth={76.4}
          type={'coach'}
          countClients={33}
          countReports={39}
        />
        <WeekTasks />

      </div>

    </>
  )
}

export default App
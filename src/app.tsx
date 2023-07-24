import { useState } from 'react'
import styles from './app.module.css'
import Logo from './components/logo/logo'
import { SmallWidget } from './components/small-widget/small-widget'
import { UserPanel } from './components/user/user'
import Avatar from './images/avatar.svg'
import { SendReportWidget } from './components/send-report-widget/send-report-widget'


function App() {

  return (
    <>
      {/* Тест карточки отправки данных*/}
      <div className={styles.test}>
        <SendReportWidget
          title={'Внести вес'}
          currentValue={77.9339}
          targetValue={-10}
          extraClass={'kg'}
        />
      </div>
      {/* Тест карточки клиента и тренера */}
      {/* <div className={styles.test}>

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

        <UserPanel
          avatar={Avatar}
          fullname={'Николай Фаюстов'}
          location={'Кисловодск'}
          age={22}
          startWeigth={99.3}
          targetWeigth={76.4}
          type={'client'}
        />
      </div> */}
      {/* Тестовый ряд виджетов */}
      <div className={styles.test}>
        <SmallWidget
          title={'За текущий месяц'}
          currentValue={-3.5}
          isWithTarget={false}
          unit={'kg'}
          extraClass={'kg'}
        />
        <SmallWidget
          title={'Калорийность'}
          currentValue={1300}
          targetValue={1500}
          isWithTarget={true}
          unit={'kcal'}
          extraClass={'kcal'}
        />
        <SmallWidget
          title={'Процент жира'}
          currentValue={37}
          targetValue={33.5}
          isWithTarget={true}
          unit={'%'}
          extraClass={'fats'}
        />
        <SmallWidget
          title={'Активность'}
          currentValue={24500}
          isWithTarget={false}
          extraClass={'steps'}
        />
      </div>
    </>
  )
}

export default App
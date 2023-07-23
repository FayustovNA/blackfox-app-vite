import { useState } from 'react'
import styles from './app.module.css'
import Logo from './components/logo/logo'
import { SmallWidget } from './components/small-widget/small-widget'
import Fleme from './images/flame.svg'
import Calories from './images/calories.svg'
import Steps from './images/feets.svg'
import Person from './images/person.svg'
import { UserPanel } from './components/user/user'
import Avatar from './images/avatar.svg'

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

        <UserPanel
          avatar={Avatar}
          fullname={'Николай Фаюстов'}
          location={'Кисловодск'}
          age={22}
          startWeigth={99.3}
          targetWeigth={76.4}
          type={'client'}
        />
      </div>
      {/* Тестовый ряд виджетов */}
      <div className={styles.test}>
        <SmallWidget
          title={'За текущий месяц'}
          currentValue={-3.5}
          icon={Fleme}
          isWithTarget={false}
          unit={'kg'}
          extraClass={styles.kg}
        />
        <SmallWidget
          title={'Калорийность'}
          currentValue={1300}
          targetValue={1500}
          icon={Calories}
          isWithTarget={true}
          unit={'kcal'}
          extraClass={styles.calories}
        />
        <SmallWidget
          title={'Процент жира'}
          currentValue={37}
          targetValue={33.5}
          icon={Person}
          isWithTarget={true}
          unit={'%'}
          extraClass={styles.fats}
        />
        <SmallWidget
          title={'Активность'}
          currentValue={24500}
          icon={Steps}
          isWithTarget={false}
          extraClass={styles.steps}
        />
      </div>
    </>
  )
}

export default App
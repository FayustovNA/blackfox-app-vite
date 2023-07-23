import { useState } from 'react'
import styles from './app.module.css'
import Logo from './components/logo/logo'
import { SmallWidget } from './components/small-widget/small-widget'
import Fleme from './images/flame.svg'

function App() {

  return (
    <>
      <div>
        {/* Тестовый виджет */}
        <SmallWidget
          title={'Калорийность'}
          currentValue={24500}
          targetValue={3450}
          icon={Fleme}
          isWithTarget={true}
          unit={'kcal'}
          extraClass={styles.steps}
        />

      </div>
    </>
  )
}

export default App
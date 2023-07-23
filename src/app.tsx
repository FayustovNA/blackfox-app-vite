import { useState } from 'react'
import styles from './app.module.css'
import Logo from './components/logo/logo'
import { SmallWidget } from './components/small-widget/small-widget'
import Fleme from './images/flame.svg'

function App() {

  return (
    <>
      <div>
        <SmallWidget
          title={'Калорийность'}
          targetValue={100}
          icon={Fleme}
          isWithTarget={true}
        />

      </div>
    </>
  )
}

export default App
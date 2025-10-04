import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultsChart from './Components/ResultsChart/ResultsChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {


  return (
    <>

      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>

      <ResultsChart></ResultsChart>


    </>
  )
}
 
export default App 
   
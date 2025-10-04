import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOption from './Components/PricingOption/PricingOption'
import ResultsChart from './Components/ResultsChart/ResultsChart'
import TooltipChart from './Components/TooltipChart/tooltipChart'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json');

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

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

      <ResultsChart></ResultsChart>
      <TooltipChart></TooltipChart>


    </>
  )
}
 
export default App 
   
// src/App.jsx

import { Suspense } from 'react'
import './App.css'
import Countries from './countries/Countries'

  const countriesPromise=fetch('https://openapi.programming-hero.com/api/all')
  .then(res=>res.json())

function App() {

  return (
    <>
     
 <Suspense fallback={<p>country is coming...</p>}>
   <Countries  countriesPromise={ countriesPromise}> </Countries>

 </Suspense>
      
     
    </>
  )
}

export default App

import React, { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {

  return (
    <>
      <h1>App.jsx</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App

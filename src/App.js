import React from 'react'
import './App.css';
import ParallaxPage from './components/ParallaxPage';

const App = () => {
  let xValue = '16'
  let yValue

  window.addEventListener('load', (e) => {

    // console.log(document.getElementById('xvalue').innerHTML = "yooo");
    window.addEventListener("deviceorientation", (e) => {
      xValue = e.beta
      // xValue = "58"
      // console.log(e);
      console.log("hello");
      document.getElementById('xvalue').innerHTML = `${xValue} px`

    })

  })

  return (
    <>
      <h1 id='xvalue'>{xValue} px</h1>
      <h1 id='yvalue'>Y px</h1>

      {/* <ParallaxPage /> */}
    </>
  )
}

export default App
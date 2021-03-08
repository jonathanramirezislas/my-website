import React, { Component } from 'react'
  import { init } from 'ityped'
  
  export default class Typed extends Component {
    componentDidMount(){
      const myElement = document.querySelector('#myElement')
      init(myElement, { showCursor: false, strings: [' Java ☕', ' ReactJS ⚛' , 'AWS ☁️' ] })
    }
    render(){
      return ( 
      <div className="flex flex-row">
        <h1 className="mr-1 text-md">Full Stack developer:</h1>
        <h1 id="myElement" className="text-md"></h1>
      </div>
    )
    }
  }
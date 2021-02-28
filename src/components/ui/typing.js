import React, { Component } from 'react'
  import { init } from 'ityped'
  
  export default class Typed extends Component {
    componentDidMount(){
      const myElement = document.querySelector('#myElement')
      init(myElement, { showCursor: false, strings: ['I am Jonathan ', 'Nice to me you!' ] })
    }
    render(){
      return <div id="myElement"></div>
    }
  }
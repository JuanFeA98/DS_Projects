import * as React from "react"
import Chart1 from "../components/Chart1.js"

import Header from '../components/Header.js'
import Main from '../components/Main.js'

import '../styles/index.css'

// markup
const IndexPage = () => {
  return (
    <main>
      <Header/>
      <Main/>
      <Chart1/>
    </main>
  )
}

export default IndexPage

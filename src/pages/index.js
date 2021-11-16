import * as React from "react"

import Header from '../components/Header.js'
import Main from '../components/Main.js'

import LineChart from "../charts/LineChart.js"
import BarChart from "../charts/BarChart.js"

import '../styles/index.css'

// markup
const IndexPage = () => {
  return (
    <main>
      <Header/>
      <Main/>
      <section className="Graphs">
        <LineChart/>
        <BarChart/>
      </section>
    </main>
  )
}

export default IndexPage

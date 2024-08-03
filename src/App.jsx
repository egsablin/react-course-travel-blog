import React from "react"
import Header from "./components/Header"
import News from "./components/News"
import data from "./components/data"

function App() {

  const newsElement = data.map((news) => {
    return (
      <News 
        key={news.id}
        {...news}
      />
    )
  })

  return (
    <>
      <Header />
      {newsElement}
    </>
  )
}

export default App

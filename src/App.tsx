import React from "react"
// import ReactDOM from "react-dom/client"
// import r2wc from "react-to-webcomponent"
import ViewCarousel from "./Carousel"

/*const Greeting = () => {
  return <h1>Hello, World!</h1>
}

const WebGreeting = r2wc(Greeting, React, ReactDOM)
customElements.define("web-greeting", WebGreeting)*/

const App = () => {
  
  return (
    <div>
      <ViewCarousel />
    </div>
  )
}
export default App;
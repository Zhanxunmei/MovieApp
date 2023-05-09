import React from 'react'
import StarwarsApp from './StarwarsApp'
import Star from './Star.png';

const App = () => {
  return (
    <div>
        <img src={Star} alt="logo" className="logo"/>
        <StarwarsApp/>
    </div>
  )
}

export default App
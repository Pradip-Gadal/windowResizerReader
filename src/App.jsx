import React, { useState, useEffect } from 'react';


const App = () => {
  const [resize, setResize] = useState({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {
    const resizeReadingFunction = () => {
      console.log('reading')
      setResize({width: window.innerWidth, height: window.innerHeight})
    };
    console.log('mount')
    window.addEventListener('resize', resizeReadingFunction);
  
    return () => {
      console.log('unmount')
      window.removeEventListener('resize', resizeReadingFunction)}
  }, [resize])
  return (
    <div>
    hello
      <p>{resize.width} {resize.height}</p>
    </div>
  )
}

export default App

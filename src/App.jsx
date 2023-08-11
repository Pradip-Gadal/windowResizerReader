import React, { useState, useEffect } from 'react';


const App = () => {
  const [resize, setResize] = useState({width: window.innerWidth, height: window.innerHeight});
  const [read, setRead] = useState(true);

  useEffect(() => {
    const resizeReadingFunction = () => {
      console.log('reading')
      setResize({width: window.innerWidth, height: window.innerHeight})
    };
    
    if(read){
      console.log('mount')
      window.addEventListener('resize', resizeReadingFunction);
    }else{
      console.log(`unmount`);
      window.removeEventListener('resize', resizeReadingFunction);
    };
  
    return () => {
      console.log('unmount')
      window.removeEventListener('resize', resizeReadingFunction)}
  }, [read])
  return (
    <div>
    hello
      <p>{resize.width} {resize.height}</p>
      <button onClick={()=> setRead(!read)}>{read? "STOP": "READ"}</button>
    </div>
  )
}

export default App

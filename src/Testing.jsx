import React, {useEffect, useState} from 'react'




function Testing() {
    const [val, setVal] = useState('')


    function throttle(func, d) {
      let flag = true;
      return function(...args) {
        if(flag) {
          flag = false;
          func.apply(this, args)

          setTimeout(() => {
            flag = true;
          }, d)
        }
      }
    }

    function handleResize() {
      console.log("resizing innerWidth and innerHeight ...", window.innerWidth, window.innerHeight)
    }

    const tf = throttle(handleResize, 1000)

    useEffect(() => {
      window.addEventListener('resize', tf)

      return () => {
        window.removeEventListener('resize', tf);
      }
    }, [])

    function debounce(func, d) {
      let timer;
      return function(...args) {
        clearTimeout(timer);
    
        timer = setTimeout(() => {
          func.apply(this, args)
        }, d)
      }
    }

    const handleChange  = (e) => {
      setVal(e.target.value);
      console.log(">>> fetching ...", e.target.value);
    }
    return (
      <div>
        <h2>Debounce and throttle examples, open console to check it</h2>
        <div> value: {val}</div>
        <input type='text' onChange={debounce(handleChange, 300)}/>

      </div>
    )
}

export default Testing
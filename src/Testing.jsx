import React, {useEffect, useState} from 'react'




function Testing() {
    // const [count, setCount] = useState(0)
    const [val, setVal] = useState('')

    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         console.log(">>> count : ", count);
    //         // setCount(count => count + 1)
    //         setCount(count + 1)
    //     }, 1000)

    //     return () => {
    //         console.log(">>> cleanup count : ", count);
    //         clearInterval(timer);
    //     }
    // }, [count])

    // function throttle(func, d) {
    //   let flag = true;
    //   return function(...args) {
    //     if(flag) {
    //       flag = false;
    //       func.apply(this, args)

    //       setTimeout(() => {
    //         flag = true;
    //       }, d)
    //     }
    //   }
    // }

    // function handleResize() {
    //   console.log("scrolling ...", window.scrollY)
    // }

    // const tf = throttle(handleResize, 1000)

    // useEffect(() => {
    //   window.addEventListener('scroll', tf)

    //   return () => {
    //     window.removeEventListener('scroll', tf);
    //   }
    // }, [])
    // function debounce(func, d) {
    //   let timer;
    //   return function(...args) {
    //     clearTimeout(timer);
    
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     }, d)
    //   }
    // }

    // const handleChange  = (e) => {
    //   setVal(e.target.value);
    //   console.log(">>> fetching ...", e.target.value);
    // }
    return (
      <div>
        {/* <h2> value: {val}</h2>
        <input type='text' onChange={debounce(handleChange, 300)}/> */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque labore nostrum vel nisi ea, pariatur voluptas perferendis, fuga praesentium nemo rerum soluta porro exercitationem molestias corporis. Sequi, officia voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae, quas provident accusamus perferendis saepe illum eum excepturi tenetur iusto animi neque voluptas. Voluptas ea nemo aspernatur sunt quam ex.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolorem neque molestias repellat architecto impedit! Commodi doloribus, dolorum blanditiis cum, qui corporis earum, accusamus distinctio tempore eveniet eius quod eligendi?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut natus odio provident fuga laudantium dolorum perspiciatis assumenda ad? Laboriosam odio veniam quaerat repellendus quas officia asperiores beatae? Magni, nemo laboriosam?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum molestias fuga eaque optio perspiciatis itaque facere dolor vitae, consequuntur earum sit laudantium impedit ea. Similique blanditiis praesentium expedita qui!</p>

      </div>
    )
}

export default Testing
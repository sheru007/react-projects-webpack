import React, {useState, useEffect, useRef, useCallback } from 'react'
import Image01Path from '../images/image01.jpeg'
import Image02Path from '../images/image02.jpeg'

const dimension = {
    width: '500px',
    height: "400px"
};

function ImageCompareSlider() {
    const [isStart, setIsStart] = useState(false)
    const sliderRef = useRef()
    const overlayRef = useRef()
    const imageRef = useRef()
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        // window.addEventListener("touchmove", handleMouseMove);
        window.addEventListener('mouseup', handleEnd)
        // window.addEventListener('touchend', handleEnd)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            // window.removeEventListener("touchmove", handleMouseMove);
            window.removeEventListener('mouseup', handleEnd)
            // window.removeEventListener('touchend', handleEnd)
        }
    }, [isStart])

    const handleStart = () => {
        setIsStart(true)
    }
    const handleEnd = () => {
        setIsStart(false)
    }

    const handleMouseMove = useCallback((e) => {
        const w = 500;
        if(!isStart) return;
        if(!sliderRef.current || !overlayRef.current || !imageRef.current) return;
        let imagePos = imageRef.current.getBoundingClientRect()
        let pos = e.pageX - imagePos.left;
        console.log({x: e.pageX, p: imagePos.left, pos})
        if(pos < 0) pos = 0;
        if(pos > w) pos = w;

        // resize the image
        overlayRef.current.style.width = pos + 'px';

        // resize the slider
        sliderRef.current.style.left = pos + 'px';

    },[isStart])

    return (<div style={{width: '500px', height: '400px', position: 'relative'}}>
        {/* image 1 */}
        <div style={{width: '100%', height: '100%', position: 'absolute', overflow: 'hidden'}}>
            <img src={Image01Path} style={dimension} alt='image 1' />
        </div>
        {/* image 2 */}
        <div ref={overlayRef} style={{width: '50%', height: '100%', position: 'absolute',overflow: 'hidden', zIndex: 1}}>
            <img ref={imageRef} src={Image02Path} style={dimension} alt='image 2' />
        </div>
        <span ref={sliderRef} onMouseDown={handleStart} className='slider'></span>
    </div>)
}

export default ImageCompareSlider
import React, {useRef, useState} from 'react'
import Image01Path from '../images/image01.jpeg'

const imageSize = {
    width: 200,
    height: 200,
}

const zoomedImageSize = {
    width: 500,
    height: 500,
}

const zoomType = 'hover'

function ImageZoom() {
    const [isActive, setIsActive] = useState(false)
    const normalImageRef = useRef()
    const zoomedImageRef = useRef()

    const openZoom = (e) => {
        console.log("move")
        if(zoomedImageRef.current) {
            moveLens(e)
        }
        setIsActive(true)
    }

    const moveLens = (e) => {
        e.preventDefault();
        let nip = normalImageRef.current.getBoundingClientRect()
        let x = e.pageX - nip.left;
        let y = e.pageY - nip.top;
        console.log("move lens : ", x, y)

        zoomedImageRef.current.style.backgroundPosition = `-${x}px -${y}px`
    }

    const closeZoom = () => {
        setIsActive(false)
    }
    const normalImageStyle = {
        backgroundImage: `url(${Image01Path})`,
        backgroundSize: `${imageSize.width}px ${imageSize.height}px`,
        width: `${imageSize.width}px`,
        height: `${imageSize.height}px`
    }

    const zoomedImageStyle = {
        backgroundImage: `url(${Image01Path})`,
        backgroundSize:
          zoomType === "click"
            ? `${zoomedImageSize.width}px ${zoomedImageSize.height}px`
            : `${zoomedImageSize.width * 1.5}px ${zoomedImageSize.height * 1.5}px`,
        backgroundRepeat: "no-repeat",
        width: `${zoomedImageSize.width}px`,
        height: `${zoomedImageSize.height}px`
      };
  return (
    <div >
        <div 
            style={{position: 'relative', ...normalImageStyle}} 
            onMouseMove={openZoom} 
            onMouseLeave={closeZoom}
            ref={normalImageRef}

        >
            {
                isActive && (<div 
                    ref={zoomedImageRef} 
                    style={{position: 'absolute', top: '0', left: '110%', zIndex: 999, ...zoomedImageStyle}}
                >
                </div>)
            }
        </div>
    </div>
  )
}

export default ImageZoom
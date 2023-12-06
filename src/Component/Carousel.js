import React, { useEffect, useState } from 'react'
import '../assests/carousel.css'
import { dataImg } from './Contants.js'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Carousel = () => {



  const [activeImg, setActiveImg] = useState(0)

  const previousImg = () => {
    setActiveImg(!activeImg ? dataImg.length - 1 : activeImg - 1)
  }

  const nextImg = () => {
    setActiveImg((activeImg + 1) % dataImg.length)
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      nextImg()
    }, 8000)
    return () => {
      clearTimeout(timer)
    }
  }, [activeImg])

  return (
    <>
      <div className='carouselParent'>
        <button className='previousBtn' onClick={() => previousImg()} ><ArrowBackIosIcon /></button>
        {dataImg.map((item, index) => {
          return (
            <img key={item} src={item} alt='img' className={(activeImg === index ? 'firstclass' : 'secondclass')} />
          )
        })}
        <button className='nextBtn' onClick={() => nextImg()}><ArrowForwardIosIcon /></button>
      </div>
    </>
  )
}

export default Carousel
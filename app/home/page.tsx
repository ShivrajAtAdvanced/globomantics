import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OurStoryPic from '../images/image1.jpg';
import style from './home.module.css';

const home = () => {
  return (
    <>
      <div className={style.bgWrap}>
        <Image 
          src={OurStoryPic}
          alt="Our Story Pic"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={style.bgHeader}>Humble beginnings a story of life</h1>
      <p className={style.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomorrow today.
      </p>
    </>
  )
}

export default home
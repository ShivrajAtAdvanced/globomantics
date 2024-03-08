import React from 'react'
import Link from 'next/link';
import style from './conference.module.css';
import Image from 'next/image';
import ConferenceImage from '../images/image2.png';

const conference = () => {
  return (
    <>
      <div className={style.bgWrap}>
        <Image 
          src={ConferenceImage}
          alt="Conference Pic"
          quality={100}
          placeholder="blur"
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
          />
      </div>
      <h1 className={style.bgHeader}>Welcome to Globomantics Conference</h1>
      <h2 className={style.bgText}>
        <Link className={style.bgLinks} href="/conference/speakers">
          View Speakers
        </Link>
      </h2>
      <h2 className={style.bgText}>
        <Link className={style.bgLinks} href="/conference/sessions">
          View Sessions
        </Link>
      </h2>
    </>
  )
}

export default conference
import React from 'react'
import Link from 'next/link';
import style from '../conference.module.css';

async function fetchSpeakers() {
  //Static Site Generation by default or Static Data Fetching
  // const response = await fetch(
  //   'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
  // );
  
  //Incremental Site Regeneration
  const response = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json',
    {next: { revalidate: 10 }}
  );

  const data = await response.json();
  return data;
}

const speakers = async () => {
  const data = await fetchSpeakers();

  return (
    <div className={style.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h2>
        <Link href="/conference">Back to Conference</Link>
      </h2>
      {data.speakers.map(({id, name, bio}) => (
        <div key={id} className={style.infoContainer}>
          <h3 className={style.titleText}>{name}</h3>
          <h5 className={style.descText}>{bio}</h5>
        </div>
      ))}
    </div>
  )
}

export default speakers
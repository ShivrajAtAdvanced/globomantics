import React from 'react'
//import { speakerJson } from '../page';
import style from '../../conference.module.css';

// async function fetchSpeakersInfo(params) {
//     const res = await fetch(
//     'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
//     ) 
    
//     const data = await res.json();
//     //const speakerInfo = speakerJson.speakers.find(
//     const speakerInfo = await data.speakers.find(
//         (speaker) => speaker.name === params.slug
//     );
//     //const speakerInfo = data;
//     console.log(speakerInfo);
//     return speakerInfo;
// }

const dynamicPageComponent = async ({params}) => {
    // const speakerInfo = await fetchSpeakersInfo(params);

    // const { id, bio, sessions, name, featured } = speakerInfo;
    return (
        <div className={style.infoContainer}>
            {/* <h3 className={style.titleText}>{name}</h3>
            <h5 className={style.descText}>About: {bio}</h5>
            {sessions && sessions.map(({ name, id }) => (
                <div key={id}>
                    <h5 className={style.descText}>Session: {name}</h5>
                </div>
            ))} */}
        </div>
    )
}

export default dynamicPageComponent
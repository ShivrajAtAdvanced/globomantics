import React from 'react'
//import { speakerJson } from '../page';
import style from '../../conference.module.css';

async function fetchSpeakersInfo(params: any) {
//async function fetchSpeakersInfo(searchParams) {
    const res = await fetch(
    'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json'
    );
    
    const data = await res.json();
    //const speakerInfo = speakerJson.speakers.find(
    console.log("I am slug"+ params);
    const speakerInfo = await data.speakers.find(
        (speaker: any) => speaker.id === params.slug
        //(speaker: any) => speaker.name === params.slug
    );
    // const array = await data.speakers;
    // const speakerInfo = await array.find(
    //     (speaker: any) => speaker
    // );
    //const speakerInfo = data;
    if (typeof speakerInfo !== 'undefined') {
        console.log("exists")
    }
    else
    {
        console.log("doesn't exist")
    }
    console.log(speakerInfo);
    return speakerInfo;
}

//const dynamicPageComponent = async ({params}: {params: {slug: string}}) => { //This gives warning but works.
const dynamicPageComponent = async ({params}: any) => {
    const speakerInfo = await fetchSpeakersInfo(params);
    console.log(speakerInfo);
    const { id, bio, sessions, name, featured }: any = speakerInfo;
    return (
        <div className={style.infoContainer}>
            <h3 className={style.titleText}>{name}</h3>
            <h5 className={style.descText}>About: {bio}</h5>
            {sessions && sessions.map(({ name, id }: any) => (
                <div key={id}>
                    <h5 className={style.descText}>Session: {name}</h5>
                </div>
            ))}
        </div>
    )
}

export default dynamicPageComponent
//
//This below function is also a working one. It is same as above just written differently.
// export default async function Page({ params }: any) {
// // export default async function Page(
// // {   
// //     params,
// //     searchParams,
// // }: {
// //     params: { slug: string }
// //     searchParams: { [key: string]: string | string[] | undefined }
// // }) {
//     //console.log(fetchSpeakersInfo(searchParams));
//     const speakerInfo = await fetchSpeakersInfo(params);
//     //const speakerInfo = await fetchSpeakersInfo(searchParams.key);
//     console.log(speakerInfo);
//     const { id, bio, sessions, name, featured }: any = speakerInfo;
//     return (
//         <div className={style.infoContainer}>
//             <h3 className={style.titleText}>{name}</h3>
//             <h5 className={style.descText}>About: {bio}</h5>
//             {sessions && sessions.map(({ name, id }: any) => (
//                 <div key={id}>
//                     <h5 className={style.descText}>Session: {name}</h5>
//                 </div>
//             ))}
//         </div>
//     )
// }

// import React from 'react'
// import Link from 'next/link';
// import style from '../conference.module.css';

// /* Dynamic Data Fetching / Server Side Rendering i.e. SSR  */
// async function fetchSessions() {
//   const res = await fetch(
//   'https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/sessions.json',
//   { cache: 'no-store' }
//   );

//   const data = await res.json();
//   return data;
// }

// const sessions = async () => {
//   const data = await fetchSessions();

//   return (
//     <div className={style.parentContainer}>
//       <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
//         Last Rendered: {new Date().toLocaleTimeString()}
//       </div>
//       <h2>
//         <Link href="/conference">Back to Conference</Link>
//       </h2>
//       {data.sessions.map(
//         ({ id, title, description, room, day, track, speakers }) => (
//           <div key={id} className={style.infoContainer}>
//             <h3 className={style.titleText}>{title}</h3>
//             {speakers && speakers.map(({name}) => (
//               <h3 key={id} className={style.titleText}>Speaker: {name}</h3>
//             ))}
//             <h5 className={style.descText}>{description}</h5>
//             <h4 className={style.infoText}>Room: {room}</h4>
//             <h4 className={style.infoText}>Day: {day}</h4>
//             <h4 className={style.infoText}>Track: {track}</h4>
//           </div>
//         )
//       )}
//     </div>
//   )
// }

// export default sessions
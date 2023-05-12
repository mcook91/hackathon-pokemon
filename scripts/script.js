// import ReactDOM from "react-dom";
// import React, { Fragment, useEffect, useState } from "react";
// import "./style.css";
// import { createApi } from "unsplash-js";

// const api = createApi({
//   // Don't forget to set your access token here!
//   // See https://unsplash.com/developers
//   accessKey: "nGJrZtNBG_tCRd_SZukQZ3bRJ2Dfy_wMbFnkdUshFAU"
// });

// const PhotoComp = ({ photo }) => {
//   const { user, urls } = photo;

//   return (
//     <Fragment>
//       <img className="img" src={urls.regular} />
//       <a
//         className="credit"
//         target="_blank"
//         href={`https://unsplash.com/@${user.username}`}
//       >
//         {user.name}
//       </a>
//     </Fragment>
//   );
// };

// const Body = () => {
//   const [data, setPhotosResponse] = useState(null);

//   useEffect(() => {
//     api.search
//       .getPhotos({ query: "cat", orientation: "landscape" })
//       .then(result => {
//         setPhotosResponse(result);
//       })
//       .catch(() => {
//         console.log("something went wrong!");
//       });
//   }, []);

//   if (data === null) {
//     return <div>Loading...</div>;
//   } else if (data.errors) {
//     return (
//       <div>
//         <div>{data.errors[0]}</div>
//         <div>PS: Make sure to set your access token!</div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="feed">
//         <ul className="columnUl">
//           {data.response.results.map(photo => (
//             <li key={photo.id} className="li">
//               <PhotoComp photo={photo} />
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// };

// const Home = () => {
//   return (
//     <main className="root">
//       <Body />
//     </main>
//   );
// };

// ReactDOM.render(<Home />, document.getElementById("root"));


const apiKey = 'nGJrZtNBG_tCRd_SZukQZ3bRJ2Dfy_wMbFnkdUshFAU';
const url = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;


axios.get(url)
.then(response => {
  console.log(response)
})
.catch(error => {
  console.error(error);
});
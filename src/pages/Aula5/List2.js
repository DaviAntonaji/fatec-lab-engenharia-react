import { useState } from "react";

let initialArtists = [
  {
    id: 0,
    name: "Marta Covin Andrade",
  },
  {
    id: 1,
    name: "Lamidi Olonade Fakeye",
  },
  {
    id: 2,
    name: "Louise Nevelson",
  },
];

export default function List2Aula5() {
  const [artists, setArtists] = useState(initialArtists);
  console.log(artists);
  return (
    <>
      <h1>Inspiring sculptors</h1>
      <ul>
        {artists.map(artist => (
           <li key={artist.id}>
           {artist.name} {"  "}{" "}
           <button
             onClick={() => {
               setArtists(artists.filter((a) => a.id !== artist.id));
             }}
           >
             Delete
           </button>
         </li>
        ))}
      </ul>
    </>
  );
}

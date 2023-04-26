import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function ListAula4() {
  const chemists = people.filter((e) => e.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li>
      <img src={getImageUrl(person, "")} alt={person.name}/>
      <p>
        <b>{person.name}</b>
      {' ' + person.profession + ' know for ' + person.accomplishment}</p>
    </li>
  ));
  return <ul>
    {listItems}
  </ul>
}

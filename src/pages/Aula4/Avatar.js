import { getImageUrl } from './utils';

export default function Avatar(props) {
    let person = props.person;
    let size = props.size;
    return (
        <img className="avatar" src={getImageUrl(person)} alt={person.name} width={size} height={size}/>
    )   
}
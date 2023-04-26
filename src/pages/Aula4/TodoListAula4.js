const person = {
    name: "Gregorio Y. Zara",
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}
const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)
}

export default function TodoListAula4() {
    return (
    <div style={person.theme}>
        <h1>Hey {person.name}'s Todo list for {formatDate(today)}</h1>
        <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo"/>
        <ul>
            <li>Improve the video phone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on alcohol-fuelled engine</li>
        </ul>
    </div>
    )
}
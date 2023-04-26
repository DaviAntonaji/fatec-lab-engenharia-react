function Item({name, isPacked}) {
    let itemContent = name;
    if(isPacked) {
        itemContent = (<del>
            {name} ✔
        </del>)
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    )
}


export default function PackingList() {
    return (
        <section>
            <ul>
                <Item isPacked={true} name="Space Suit"/>
                <Item isPacked={true} name="Helmet with a golden leaf"/>
                <Item isPacked={false} name="Photo of Tam"/>
            </ul>
        </section>
    )
}
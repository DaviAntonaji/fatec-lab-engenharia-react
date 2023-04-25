export function Profile () {
    return (
        <div>
            <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson"/>
        </div>
    );
}


export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientits</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    )
}
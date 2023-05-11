export default function ContactList({selectedContact, contacts, onSelect}) {
    return (
        <section className="contact-list">
            <ul>
                {contacts.map(contact => (
                    <li key={contact.email}>
                        <button onClick={() => onSelect(contact)}>{contact.name}</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.email} contact={to}/>
    </>
  );
}

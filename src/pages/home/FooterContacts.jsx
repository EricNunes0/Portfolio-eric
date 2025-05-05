import contactsJSON from "../../jsons/contacts.json";
import FooterContact from "./FooterContact";

export default function FooterContacts({theme}) {
    let divs = [];
    for(const contact of contactsJSON.contacts) {
        divs.push(<FooterContact theme={theme} contact={contact}></FooterContact>)
    };
    return (divs);
};
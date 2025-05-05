import ContactsArea from "./ContactsArea";

export default function Contacts({theme}) {
    let contacts = [
        {
            "name": "LinkedIn",
            "url": "https://www.linkedin.com/in/eric-nunes-ramalho-58a146208/",
            "image": "images/contacts/linkedin.png"
        },
        {
            "name": "Github",
            "url": "https://github.com/EricNunes0",
            "image": "images/contacts/github.png"
        },
        {
            "name": "WhatsApp",
            "url": "https://wa.me/5521982990522",
            "image": "images/contacts/whatsapp.png"
        },
        {
            "name": "Email",
            "url": "mailto:eric26052004@gmail.com",
            "image": "images/contacts/email.png"
        }
    ]
    let links = [];
    contacts.forEach((contact) => {
        links.push(<ContactsArea contact={contact} theme={theme}></ContactsArea>);
    });

    return (
        <div className="contacts">
            {links}
        </div>
    )
}
import ContactLink from "./ContactLink";

export default function ContactsArea({contact, theme}) {
    return (
        <div class = {`contacts-areas ${theme}`}>
            <ContactLink contact={contact} theme={theme}></ContactLink>
        </div>
    )
}
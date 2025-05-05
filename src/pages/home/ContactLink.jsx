export default function ContactLink({contact, theme}) {
    return (
        <a class = "contacts-links" href = {contact.url} target="_blank">
            <img class = {`contacts-images ${theme}`} src = {contact.image} alt={contact.name}/>
        </a>
    )
}
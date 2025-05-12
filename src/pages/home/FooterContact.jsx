export default function FooterContact({theme, contact}) {
    return (
        <div className="contatos-items move move-top">
            <a class = "contatos-links" href = {contact.url} alt = {contact.name} target = "_blank">
                <div class = {`contato-images-divs ${theme}`}>
                    <img class = {`contato-images ${theme}`} src = {contact.image}/>
                </div>
                <div class = "contato-texts-div">
                    <h5 class = {`title5 text-align-center ${theme}`}>{contact.name}</h5>
                    <h6 class = {`title6 text-align-center ${theme}`}>{contact.username}</h6>
                </div>
            </a>
        </div>
    )
};
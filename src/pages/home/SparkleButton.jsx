export default function SparkleButton({theme, text, icon}) {
    return (
        <button type="button" className={`sparkle-button ${theme}`}>
            {icon ? (<img src={icon} className={`sparkle-button-icon ${theme}`} />) : (<></>)}
            <span className={`sparkle-button-text ${theme}`}>{text}</span>
        </button>
    )
}
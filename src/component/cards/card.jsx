import "./card.css"
const Card = (props)=>{
    return (
        <div className="cardcontainer">
            <div className={`Appcard ${props.color}`}>
                <img src={props.image} alt="" />
                <h2>{props.text}</h2>
                <p>{props.word}</p>

            </div>
        </div>
    )
}
export default Card
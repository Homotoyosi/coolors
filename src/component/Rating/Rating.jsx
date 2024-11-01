import "./Rating.css"
import Disneyimage from "../../assets/icons8disney.png"
import Dreamworrkimage from "../../assets/Dreamwork.png"
import Warnerbrosimage from "../../assets/Warnerbros.png"
import Netfliximage from "../../assets/netflixlogoicon.png"
import Airbnbimage from "../../assets/icons8airbnb.png"
import Dropboximage from "../../assets/icons8dropbox.png"
import Hasbroimage from "../../assets/Hasbro.png"
import Ubisoftimage from "../../assets/icons8ubisoft.png"
import EAimage from "../../assets/EA.png"
import Appleimage from "../../assets/appleimage.png"
import Miscrosoftimage from "../../assets/icons8microsoft.png"
const Rating = ()=>{
    return (
        <div className="ratingcontent">
          <h2>Used by 5+ million designers and by top companies</h2>
            <div className="ratingimg">
                <img id="disney" src={Disneyimage} alt="" />
                <img id="dreamwork" src={Dreamworrkimage} alt="" />
                <img id="warnerbros" src={Warnerbrosimage} alt="" />
                <img id="netflix" src={Netfliximage} alt="" />
                <img id="airbnb" src={Airbnbimage} alt="" />
                <img id="dropbox" src={Dropboximage} alt="" />
                <img id="hasbro" src={Hasbroimage} alt="" />
                <img id="ubisoft" src={Ubisoftimage} alt="" />
                <img id="EA" src={EAimage} alt="" />
            </div>
            <div className="ratingimg2">
                <img id="apple" src={Appleimage} alt="" />
                <img id="microsoft" src={Miscrosoftimage} alt="" />
            </div>

        </div>
    )
}
export default Rating
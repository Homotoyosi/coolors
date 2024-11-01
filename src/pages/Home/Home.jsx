import Card from "../../component/cards/card"
import Hero from "../../component/Hero/Hero"
import Appleimage from "../../assets/appleimage.png"
import Andriodimage from "../../assets/icons8android.png"
import Figmaimage from "../../assets/icons8figma.png"
import Chromeimage from "../../assets/icons8chrome.png"
import Adobeimage from "../../assets/icons8adobe.png"
import Rating from "../../component/Rating/Rating"
import Footer from "../../static/Footer/Footer"

const Home = ()=>{
    return(
        <div>
            <Hero />
            <div className="cardcontainer">
        <Card
          text="iOS App"
          color="card1"
          image={Appleimage}
          word="Create, browse and save palettes on the go."
        />
        <Card
          text="Andriod App"
          color="card2"
          image={Andriodimage}
          word="Thousands of palettes in your pocket."
        />
        <Card
          text="Figma Plugin"
          color="card3"
          image={Figmaimage}
          word="All palettes right in your workspace."
        />
        <Card
          text="Chrome Extension"
          color="card4"
          image={Chromeimage}
          word="Get and edit a palette every new tab."
        />
         <Card
          text="Adobe Extension"
          color="card5"
          image={Adobeimage}
          word="Use Coolors with your favorite tools."
        />
      </div>
      <Rating />
      <Footer />
        </div>
    )
}
export default Home
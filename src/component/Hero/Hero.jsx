import './Hero.css'
import Image from '../../assets/WhatsAppimage.jpeg'
import Productimage from "../../assets/toppostbadge.svg"
const Hero = ()=>{
    return(
        <div className='Herocontainer'>
           <div className='Herocontent'>
                <h1>The superfast color palettes generator</h1>
                 <p>Create the perfect palette or get inspired by thousands of beautiful color schemes</p>
              <div className='buttonContainer'>
                <button id='btn1'>Start the generator!</button>
                <button id='btn2'>Explore trending palettes</button>
                <img id='productimage' src={Productimage} alt="" />
              </div>
           </div>
           <div className='Heroimage'>
            <img id='image' src={Image} alt="" />

           </div>
        </div>
    )
}
export default Hero
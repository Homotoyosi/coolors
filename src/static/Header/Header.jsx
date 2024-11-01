import './Header.css'
import Coolors from "../../assets/coolors.svg"
const Header = ()=>{
    return (
        <div>
            <div className="HeaderContainer">
                <div className="logo">
                  <img src={Coolors} alt="" />

                </div>
                <div className="navs">
                    <nav className='nav1'>Tools</nav>
                    <nav className='nav2'>Go Pro</nav>
                    <nav className='
                    nav3'>Sign In</nav>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default Header
import React ,{useRef} from 'react'

import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import './stylesNav.css';



function Navbar() {
    const Nav_ref = useRef();
    const ShowHide = ()=>{
        Nav_ref.current.classList.toggle("resp_class");
    }
  return (

   

    <div className='Container'>
        <img src="./assets/logo.png" className='Logo' />
        <div ref={Nav_ref} className="links">
            <a href="#">About</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <button onClick={ShowHide} className='Nav_btn btn_Fatimes'>
                <FaTimes/>
            </button>
        </div>
        <button onClick={ShowHide} className='Nav_btn btn_Menu'>
        <CgMenuRight />
        </button>
        
    </div>
  )
}

export default Navbar
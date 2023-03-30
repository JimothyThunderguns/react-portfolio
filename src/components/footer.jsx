import React, { Component } from 'react'
import { BsLinkedin, BsGithub, BsFillTelephoneFill, } from 'react-icons/bs'

const Footer = () => {
    return(
        <footer>

            <ul>
            <li className="ms-3"><a className="" href="https://github.com/JimothyThunderguns"><BsGithub /></a></li>
            <li className="ms-3"><a className="" href="https://www.linkedin.com/in/ryan-jackson-9a419a250/"><BsLinkedin /></a></li>
            <li className="ms-3"><a className="" href="tel:715-347-4664"><BsFillTelephoneFill /></a></li>
            </ul>
        </footer>
    )
}
 
export default Footer;
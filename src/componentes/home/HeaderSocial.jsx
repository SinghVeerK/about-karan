import React from 'react'
import "./home.css"

export const HeaderSocial = () => {
  return (
    <div className="home__socials">
        <a href="https://www.instagram.com/" className="home__social-link"el="noreferrer"  target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://twitter.com/" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-twitter"></i>
        </a>
 
        <a href="https://www.behance.net/" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-behance"></i>
        </a>
 
        <a href="https://dribbble.com/" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-dribbble"></i>
        </a>
 
        <a href="https://in.pinterest.com/" className="home__social-link" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-pinterest"></i>
        </a>
 
    </div>
  )
}

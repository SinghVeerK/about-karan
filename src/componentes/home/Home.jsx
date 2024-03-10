import React from 'react'
import "./home.css"
import { HeaderSocial } from './HeaderSocial'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={require("../../asset/user1.png")} alt="" className="home__img" />
        <h1 className="home__name">Mr. KVS</h1>
        <span className="home__education">I am a Font-end Developer</span>
        <HeaderSocial/>

        <a href="#contact" className="btn">Hire me</a>

        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home
import React from 'react'
import "./about.css"
import Aboutbox from './Aboutboxes'
import Dot from '../../components/Dot'

const About = () => {
  return (
    <section className="about container section" id='about'>
     <h1 className="section__title">About Me</h1>
     <div className="about__container grid">
      <img src={require("../../asset/user2.png")} alt='user' className='about__img'></img>
          <div className="about__data grid">
          <div className="about__info">
          <p className="about__description"> I am Bolby deo, web devloper in United kingdom</p>
          <a href="www.google.com" className="btn">Download CV</a>
          </div>
          
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Development</h3>
                  <span className="skills__number">90%</span>                
              </div>
              <div className="skill__bar">
              <span className='skill-dot'>
                    {
                      Array.from(new Array(5)).map((_, index) => {
                        return <Dot key={index} shade={index>1 ? "red" : "black"} />
                      })
                    }  
                  </span>
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">UI/UX design</h3>
                  <span className="skills__number">80%</span>                
              </div>
              <div className="skill__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__title">
                <h3 className="skills__name">Photography</h3>
                  <span className="skills__number">60%</span>                
              </div>
              <div className="skill__bar">
                <span className="skills__percentage  photography"></span>
              </div>
            </div>
          </div>
       </div>
     </div>

     <Aboutbox />
    </section>
  )
}

export default About
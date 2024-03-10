import React from 'react'
import "./services.css"
// import Image1 from '../asset/wd.png'
// import Image2 from '../asset/ui.png'
// import Image3 from 'asset/wd.png'
const data = [
  {
    id: 1,
    image: require( '../../asset/wd.png' ),
    title: "Web Design",
    description: "I have a strong background in web design and can create visually appealing websites"
  },
  {
    id: 2,
    image: require( '../../asset/ui.png' ) ,
    title: "Ui/UX Design",
    description: "I have a strong background in web design and can create visually appealing websites"
  },
  {
    id: 3,
    image: require( '../../asset/photo.png' ),
    title: "Web Design",
    description: "I have a strong background in web design and can create visually appealing websites"
  }
]

const Services = () => {
  return (
     <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
      {data.map(({id,image,title,description})=>
      {
        return(
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
      </div>
     </section>
    )
}

export default Services
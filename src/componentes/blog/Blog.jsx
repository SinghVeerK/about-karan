import React from 'react'
import "./blog.css"

const Blog = () => {
  return (
   <section className="blog container section" id='blog'>
    <h2 className="section_title">Latest Posts</h2>

    <div className="blog__container grid">
      <div className="blog__card">
        <div className="blog__thumb">
          <a href="www.google.com"><span className="blog__category">Review</span></a>
          <a href="www.google.com"><img src={require("../../asset/review1.png")} alt="" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">Best App Development Tool for your project</h3>
          <div className="blog__meta">
            <span>28-02-2024</span>
            <span className="blog__dot">.</span>
            <span>Karan</span>
          </div>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="www.google.com"><span className="blog__category">Tutorial</span></a>
          <a href="www.google.com"><img src={require("../../asset/tutorials.png")} alt="" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">Common Misconcepts about payment</h3>
          <div className="blog__meta">
            <span>23-02-2024</span>
            <span className="blog__dot">.</span>
            <span>Karan</span>
          </div>
        </div>
      </div>

      <div className="blog__card">
        <div className="blog__thumb">
          <a href="www.google.com"><span className="blog__category">Business</span></a>
          <a href="www.google.com"><img src={require("../../asset/buseness.png")} alt="" /></a>
        </div>
        <div className="blog__details">
          <h3 className="blog__title">3 Things to know about startup business</h3>
          <div className="blog__meta">
            <span>01-01-2021</span>
            <span className="blog__dot">.</span>
            <span>Karan</span>
          </div>
        </div>
      </div>
    </div>
   </section>
    )
}


export default Blog
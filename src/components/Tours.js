import React from 'react'
import Title from './Title';
import { tours } from '../data';
 const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='feature' subTitle='tours'/>
          <div className="section-center featured-center">
            {tours.map((tours)=>{
              const {id,image,date,title,info,location,duration,cost} =tours;
              return(
                <article className="tour-card" key ={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className={info}>
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                  vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> china
                  </p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
              )
            })}
          </div>
        </section>
  )
}
export default Tours;
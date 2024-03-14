import React from 'react'
import Service1 from "../images/img1.jpg"
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section className='section border-top'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className='main-heading'>Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className='card shadow'>
              <img src={Service1} className='w-100 border-bottom' alt='Services' />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className='underline'></div>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, reprehenderit.</p>
                  <Link to="/services" className='btn btn-link'>Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='card shadow'>
              <img src={Service1} className='w-100 border-bottom' alt='Services' />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className='underline'></div>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, reprehenderit.</p>
                  <Link to="/services" className='btn btn-link'>Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='card shadow'>
              <img src={Service1} className='w-100 border-bottom' alt='Services' />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className='underline'></div>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, reprehenderit.</p>
                  <Link to="/services" className='btn btn-link'>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services

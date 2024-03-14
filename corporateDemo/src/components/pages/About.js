import React from 'react'
import Vmc from './inc/Vmc'
import Services from './Services'

const About = () => {
  return (
    <div>
      <section className='py-4 bg-color'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8">
              <h6 className='float-end'>
                Home / About Us
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className='section border-bottom'>
        <div className="container">
          <h5 className='main-heading'>Our Company</h5>
          <div className="underline"></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, ipsa! Doloremque laborum quo harum officia necessitatibus incidunt deleniti. Aliquid a necessitatibus optio repellat iure beatae doloribus iusto dolores obcaecati nobis.</p>
        </div>
      </section>
      {/* our vision, mission and values */}

    <Vmc/>
    {/* our services */}

    <Services/>
    </div>

    
  )
}

export default About

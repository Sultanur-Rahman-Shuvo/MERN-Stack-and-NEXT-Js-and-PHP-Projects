import React from 'react'
import Slider from '../inc/Slider'
import { Link } from 'react-router-dom'
import Vmc from './inc/Vmc'
import Services from './Services'

const Home = () => {
  return (
    <div className='container'>
      <Slider/>
      <section className='section'>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className='main-heading'>Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non iusto quia veniam aperiam, maxime adipisci consequuntur ipsum placeat inventore odit corrupti eos minima, quidem consectetur neque quae laudantium voluptates numquam!</p>
              <Link to="/about" className='btn btn-color shadow'> Read More </Link>
            </div>
          </div>
        </div>
      </section>

      {/* our vision, mission and values */}

      <Vmc/>

      {/* our services */}

      <Services/>

    </div>
  )
}

export default Home

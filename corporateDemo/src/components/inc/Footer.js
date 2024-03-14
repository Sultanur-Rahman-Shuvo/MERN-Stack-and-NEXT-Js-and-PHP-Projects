import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='section footer bg-dark text-white'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque officiis nam blanditiis cumque laborum sapiente eaque excepturi molestias obcaecati. Accusantium consequuntur perspiciatis atque sed temporibus? Autem vitae tempore alias esse?</p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
            <div><Link to="/blog">Blog</Link></div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div><p className='text-white mb-1'>Mirpur, Dhaka-1216</p></div>
            <div><p className='text-white mb-1'>+8801741461466</p></div>
            <div><p className='text-white mb-1'>sultanurrahmanshuvo@gmail.com</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='py-4 bg-color'>
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact Us</h4>
            </div>
            <div className="col-md-8">
              <h6 className='float-end'>
                Home / Contact Us
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className='section'>
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h6>Contact Form</h6>
                <hr />
                <div className="form-group">
                  <label className='mb-2'>Full Name</label>
                  <input type="text" placeholder='Enter Full Name' className='form-control mb-3' />
                </div>
                <div className="form-group">
                  <label className='mb-2'>Phone Number</label>
                  <input type="text" placeholder='Enter Full Name' className='form-control mb-3' />
                </div>
                <div className="form-group">
                  <label className='mb-2'>Email Address</label>
                  <input type="text" placeholder='Enter Full Name' className='form-control mb-3' />
                </div>
                <div className="form-group">
                  <label className='mb-2'>Message</label>
                  <textarea className='form-control mb-3' placeholder='Type your message...' rows="3"></textarea>
                </div>
                <div className="form-group py-3">
                  <button type='button' className='btn btn-color shadow w-100'>Send Message</button>
                </div>
              </div>
              <div className="col-md-6 border-start">
                <h5 className='main-heading'>Address Information</h5>
                <div className="underline"></div>
                <p>Mirpur, Dhaka-1216</p>
                <p>Phone: +8801741461466</p>
                <p>Email: sultanurrahmanshuvo@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Contact

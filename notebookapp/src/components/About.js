import React from 'react'

const About = () => {
  return (
    <div className='container'>
      <div>
        <h3>About Us</h3>
        <p>Welcome to NotebookApp, your ultimate digital notebook designed to simplify your life and boost your productivity!</p>
      </div>
      <div>
        <h3>Our Mission</h3>
        <p>At NotebookApp, we believe that organization and creativity go hand in hand. Our mission is to provide you with a seamless and intuitive note-taking experience that adapts to your needs. Whether you are a student, professional, or someone who simply loves jotting down ideas, we are here to help you stay on top of your game.</p>
      </div>
      <div>
        <h3>Why Choose Us?</h3>
        <ol>
          <li><strong>Intuitive Design:</strong><p className='mt-2'>Our app is built with a user-friendly interface that makes note-taking a breeze.</p></li>
          <li><strong>Cross-Platform Access:</strong><p className='mt-2'>Sync your notes across all your devices and never lose track of your ideas.</p></li>
          <li><strong>Customizable Features:</strong><p className='mt-2'>Tailor the app to fit your personal style and workflow.</p></li>
          <li><strong>Secure Storage:</strong><p className='mt-2'>Your data is encrypted and protected, ensuring your notes are safe and secure.</p></li>
        </ol>
      </div>
      <div>
        <h3>Our Story</h3>
        <p>NotebookApp was created out of a passion for making note-taking more efficient and enjoyable. Our team is dedicated to continuously improving the app based on user feedback and the latest technological advancements.</p>
      </div>
      <div>
        <h3>Join Us</h3>
        <p>We are excited to have you on this journey with us. Explore our features, share your feedback, and help us make NotebookApp the best it can be. If you have any questions or suggestions, feel free to reach out to us at sultanurrahmanshuvo@gmail.com.</p>
      </div>
      <div className='mt-5 bg-dark rounded-pill' style={{ height: '27px', marginBottom: '15px' }}>
        <p className='d-flex justify-content-center align-items-center m-auto text-white'>
          ||  Thank you for choosing NotebookApp. Let us make note-taking effortless and fun  ||
        </p>
      </div>

    </div>
  )
}

export default About


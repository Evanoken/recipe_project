import React from 'react'
import 'footer.css'

function Footer() {
  const year = new Date().toLocaleDateString();
  return (
    <div className='footer'>
      <div className='project'>
        <h4>@ Recipe-project </h4>
          <h4> Date:{year}</h4>

      </div>


    </div>
  )
}

export default Footer

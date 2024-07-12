import React from 'react'

function Testimonials({prop}) {
  return <>
    <div class="col-lg-4">
        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img class="img-fluid rounded-circle mb-3" src={prop.image} alt="..." />
            <h5>{prop.name}</h5>
            <p class="font-weight-light mb-0">"{prop.msg}"</p>
        </div>
    </div>
  </>
}

export default Testimonials
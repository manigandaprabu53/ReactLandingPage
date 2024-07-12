import React from 'react'

function Feature({prop}) {
    
  return <>
  
    <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className={prop.icon}></i></div>
            <h3>{prop.title}</h3>
            <p className="lead mb-0">{prop.detail}</p>
        </div>
    </div>
  
  </>
}

export default Feature
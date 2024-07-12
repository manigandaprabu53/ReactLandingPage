import React from 'react'

function ShowCase({prop}) {
  return <>
    
                <div className="row g-0">
                  <div className={prop.order?"col-lg-6 order-lg-1 text-white showcase-img": "col-lg-6 order-lg-2 text-white showcase-img"} style={{backgroundImage: `url(${prop.imageURL})`}}></div>
                  <div className={prop.order?"col-lg-6 order-lg-2 my-auto showcase-text": "col-lg-6 order-lg-1 my-auto showcase-text"}>
                      <h2>{prop.HeadingText}</h2>
                      <p className="lead mb-0">{prop.detail}</p>
                  </div>
                </div>

  
  </>
}

export default ShowCase
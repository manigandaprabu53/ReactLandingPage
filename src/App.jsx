import React from 'react'
import TopBar from './Components/TopBar'
import HeadComp from './Components/HeadComp'
import Feature from './Components/Feature'
import ShowCase from './Components/ShowCase'
import Testimonials from './Components/Testimonials'
import img1 from './assets/img/bg-showcase-1.jpg'
import img2 from './assets/img/bg-showcase-2.jpg'
import img3 from './assets/img/bg-showcase-3.jpg'
import test1 from './assets/img/testimonials-1.jpg'
import test2 from './assets/img/testimonials-2.jpg'
import test3 from './assets/img/testimonials-3.jpg'
import MailSignup from './Components/MailSignup'
import FooterComp from './Components/FooterComp'

function App() {
  let features=[
    {
        icon: "bi-window m-auto text-primary",
        title: "Fully Responsive",
        detail: "This theme will look great on any device, no matter the size!"
    },
    {
        icon: "bi-layers m-auto text-primary",
        title: "Bootstrap 5 Ready",
        detail: "Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
        icon: "bi-terminal m-auto text-primary",
        title: "Easy to Use",
        detail: "Ready to use with your own content, or customize the source files!"
    }
 ]

 let showCase=[
  {
    imageURL: img1,
    HeadingText: "Fully Responsive Design",
    detail: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    order: false
  },
  {
    imageURL: img2,
    HeadingText: "Updated For Bootstrap 5",
    detail: "Newly improved, and full of great utility classNameNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    order: true
  },
  {
    imageURL: img3,
    HeadingText: "Easy to Use & Customize",
    detail: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    order: false
  }
 ]
 let peoples = [
  {
    image: test1,
    name: "Margaret E.",
    msg: "This is fantastic! Thanks so much guys!"
  },
  {
    image: test2,
    name: "Fred S.",
    msg: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    image: test3,
    name: "Sarah W.",
    msg: "Thanks so much for making these free resources available to us!"
  }
 ]
 console.log()
  return <>
  
    {<TopBar/>}
    {<HeadComp/>}
    <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                  {
                    features.map((e, i)=>{
                      return <Feature prop={e} key={i}/>
                    })
                  }
                </div>
            </div>
    </section>
    
    <section className="showcase">
      <div className="container-fluid p-0">
        {
        showCase.map((e, i)=>{
          return <ShowCase prop={e} key={i}/>
        })
        }
      </div>
    </section>
    <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                  {
                      peoples.map((e, i)=>{
                        return <Testimonials prop={e} key={i}/>
                      })
                  }
                </div>
            </div>
    </section>
    {<MailSignup/>}
    {<FooterComp/>}
  </>
}

export default App
import React from 'react'
import Banner from "./Banner.jsx"
import ContactUs from './ContactUs.jsx'

import Goals from './Goals.jsx'
import AboutUs from './AboutUs.jsx'
import SoftSkills from './SoftSkills.jsx'
import NavbarSec from '../Component/NavbarSec.jsx'
// import Sponsor from './Sponsor.jsx'
const Home = () => {
  return (
<>
<NavbarSec />

<Banner/>
<AboutUs/> 
<Goals/> 
<SoftSkills/> 
<ContactUs/>
      </>


)
}

export default Home
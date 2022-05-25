import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Implementation Designer</title>
        <meta property="og:title" content="District Implementation Designer" />
      </Helmet>
    </div>
  )
}

export default Home

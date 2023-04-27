import React from 'react'
import Layout from './Layout'
import logo from '../images/404-page.jpg'

const PageNotFound = () => {


  return (
    <Layout>
      <img src={logo} alt="page not found"  />
    </Layout>
  )
}

export default PageNotFound

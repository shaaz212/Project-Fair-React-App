import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import ProjectIcon from '../Assets/ZMJ1Dc.webp'

function PFHome() {
  return (
    <>

      <div className="container-fluid rounded" style={{widows:'100%',height:'100vh'}}>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 style={{fontSize:'80px'}}> <i className='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair </h1>
            <p>One Stop Destination for all software development Projects...</p>
            <Button className='btn btn-success'>Come on <i className='fa-solid fa-right-long fa-beat ms-2'></i></Button>
          </Col>
          <Col sm={12} md={6}>
              <img style={{marginTop:'100px'}} className='img-fluid w-75' src={ProjectIcon} alt="project fair" />
          </Col>
        </Row>
      </div>

    </>
  )
}

export default PFHome
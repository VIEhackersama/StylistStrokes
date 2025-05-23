import React from "react";
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link, link } from 'react-router-dom'
import logo from "../../assets/images/logoss.png"

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
];

const quick__links2=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path: '/learn',
    display: 'Learn'
  },
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

export default function Footer_3 ()  {
  
  const year = new Date().getFullYear()
   
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
        <div className="logo">
            <img src={logo} alt="" />
            <p>Let the brush speak the words of your heart.</p>

            <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
            </div>
        </div>
        </Col>
       
       <Col lg='3'>
           <h5 className="footer__link-title">Discover</h5>

           <ListGroup className="footer__quick-links">
            {
               quick__links.map((item,index)=>(
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
               ))
            }
           </ListGroup>
       </Col>
       <Col lg='3'>
           <h5 className="footer__link-title">Quick Links</h5>

          <ListGroup className="footer__quick-links">
          { quick__links.map((item,index)=>(
             <ListGroupItem key={index} className="ps-0 border-0">
                 <Link to={item.path}>{item.display}</Link>
             </ListGroupItem>
           ))
           }
          </ListGroup>
       </Col>
       <Col lg='3'>
        <h5 className="footer__link-title">Contact</h5>

        <ListGroup className="footer__quick-links">
       
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">  
              <h6>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  Address:
              </h6>
              
              <p className="mb-0">Sylhet,Banladesh</p>
            </ListGroupItem>
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">  
              <h6>
                  <span>
                  <i class="ri-mail-line"></i>
                  </span>
                  Email:
              </h6>
              
              <p className="mb-0">duong@gmail.com</p>
            </ListGroupItem>
            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">  
              <h6>
                  <span>
                  <i class="ri-phone-fill"></i>
                  </span>
                  Phone:
              </h6>
              
              <p className="mb-0">+094747372</p>
            </ListGroupItem>

         </ListGroup>
       </Col>
       <Col lg='12'className="text-center pt-5">
          <p className="copyright">Copyright {year}, design and develop by duong .All rights reserved. </p>
       </Col>
      </Row>
    </Container>
  </footer>
};

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter style={{backgroundColor:"#ebdbb2", maxWidth:"100%"}}  className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                Genz Templates 
              </h6>
              <p>
                Thank you for exploring Memegenerator,DCC-NITA project! Dreaming
                of joining DCC feels like a professional aspiration, and I hope
                to make that dream a reality through hard work and dedication.
                Here's to striving for excellence in every endeavor!
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a
                  href='https://api.memegen.link/templates/'
                  className='text-reset'
                >
                  MemegenAPI
                </a>
              </p>
              <p>
                <a href='https://www.nita.ac.in/' className='text-reset'>
                  NITA
                </a>
              </p>
              <p>
                <a href='https://dccnita.in/' className='text-reset'>
                  DCC-NITA
                </a>
              </p>
              <p>
                <a href='https://blog.dccnita.in/' className='text-reset'>
                  DCC-BlOG-NITA
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='' className='text-reset'>
                  Help
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-2' />
                NIT Agartala, Jeerania, Agartala, Tripura
              </p>
              <p>
                <MDBIcon icon='envelope' className='me-3' />
                abirdasgupta09@gmail.com
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> +91 6909982196
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className='text-center p-4'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          69iqqq
        </a>
      </div>
    </MDBFooter>
  );
}

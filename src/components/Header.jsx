// function Header() {
//   return (
//     <div>
//       {/* <img src='src/components/logo.png ' style={{ width: "50px" }} /> */}
//       <header className='header'style={{marginBottom:"20px"}}>meme mayhem</header>
//       {/* <p
//         style={{
//           fontFamily: "Poppins",
//           fontSize: "25px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#717593",
//         }}
//       >
//         <span
//           style={{
//             backgroundColor: "#654f83a4",
//             padding: "5px",
//             borderRadius: "10px",
//             fontWeight: "bold",
//           }}
//         >
//           Edit your template
//         </span>
//       </p> */}
//       {/* <img src='src/components/react.svg ' style={{ width: "50px" }} /> */}
//     </div>
//   );
// }

// export default Header;
import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand='lg' >
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem> */}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage:
            "url('https://i.kickstarter.com/assets/027/022/657/0c9995ec4641fa949cbe4565c6b74325_original.jpg?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&width=1552&sig=AOvdmfIldfuVK%2BUsUYMCXG%2BIMKMfq05f80hOdzCVW90%3D')",
          height: "400px",
        }}
      >
        <div className='mask' style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Meme Mayhem</h1>
              <h4 className='mb-3'>Get Quality Meme Templates</h4>
              {/* <MDBBtn tag='a' outline size='lg'>
                Call to action
              </MDBBtn> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
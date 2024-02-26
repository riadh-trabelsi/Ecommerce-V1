import React, { Component } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
export default class Cart extends Component {

 
  render(render) {
    return (
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {this.props.cart.length} items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />
                      {this.props.cart.map((e, i) => {
                        return (
                          <MDBCol lg="12">
                            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                              <MDBCol md="2" lg="2" xl="2">
                                <MDBCardImage
                                  src={e.imageURL}
                                  fluid
                                  className="rounded-3"
                                  alt="Cotton T-shirt"
                                />
                              </MDBCol>
                              <MDBCol md="3" lg="3" xl="3">
                                <MDBTypography tag="h6" className="text-muted">
                                  {e.productName}
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol
                                md="3"
                                lg="3"
                                xl="3"
                                className="d-flex align-items-center"
                              >
                                <MDBBtn color="link" className="px-2">
                                  <MDBIcon fas icon="minus" />
                                </MDBBtn>

                                <MDBInput
                                  type="number"
                                  min="0"
                                  defaultValue={1}
                                  size="sm"
                                />

                                <MDBBtn color="link" className="px-2">
                                  <MDBIcon fas icon="plus" />
                                </MDBBtn>
                              </MDBCol>
                              <MDBCol md="3" lg="2" xl="2" className="text-end">
                                <MDBTypography tag="h6" className="mb-0">
                                  {e.price} TND
                                </MDBTypography>
                              </MDBCol>
                            </MDBRow>

                            <hr className="my-4" />
                          </MDBCol>
                        );
                      })}
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </MDBCol>
                    <MDBCol lg="3" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total :
                          </MDBTypography>

                          <MDBTypography tag="h5">
                            {this.props.cart.reduce(
                              (acc, element) => acc + element.price,
                              0
                            )}
                            &nbsp; TND
                          </MDBTypography>
                        </div>
                        <hr className="my-4" />
                        <button className="btn btn-dark w-100">Register</button>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default class NavBar extends Component {
 
  search(str) {
    this.props.setState({
      searchQuerry: str,
    });
  }

  render(props) {
    return (
      <Navbar expand="lg" className="bg-info position-fixed w-100" style={{zIndex:3}} >
        <Navbar.Brand href="home">Shop Express</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container d-flex justify-content-between">
            <Form.Control
              type="text"
              placeholder="Looking for"
              className="w-25 mx-auto text-center"
              onChange={(event) => {
                this.search(event.target.value);
              }}
            />

            <NavDropdown title="CATEGORIES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home" className="">
              <IconButton aria-label="cart" 
              onClick={() => {
                this.props.changeView("cart")}}
              >
                <StyledBadge badgeContent={this.props.cart.length} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

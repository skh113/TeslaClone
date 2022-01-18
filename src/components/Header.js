import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="#">
        <img
          src="/images/tesla-logo2.png"
          alt="a logo image"
          className="logo"
        />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <img
          src="/images/menu.png"
          alt="menu"
          className="menu"
          onClick={() => setBurgerStatus(true)}
        ></img>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <img
            src="/images/close.png"
            alt="close"
            className="close"
            onClick={() => setBurgerStatus(false)}
          ></img>
          {/* whenever want to place s.th wrap it to make easier to move it */}
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 50px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: 600;
  font-size: 15px;
  a {
    padding: 10px 15px;
    flex-wrap: nowrap;
  }

  @media (max-width: 1010px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-right: 10px;
  font-size: 15px;
  a {
    padding: 10px 15px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s;
  li {
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

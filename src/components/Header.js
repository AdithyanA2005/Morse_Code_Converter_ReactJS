import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <Container>
        <Heading>Adimorse</Heading>
      </Container>
    </>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
`;
const Heading = styled.h1`
  color: #a8dadc;
  font-size: 2.5rem;
`;

export default Header;

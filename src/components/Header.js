import React from "react";
import styled from "styled-components";

function Header() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
  `;

  const Heading = styled.h1`
    color: #a8dadc;
    font-size: 2.5rem;
  `;

  return (
    <>
      <Container>
        <Heading>Adimorse</Heading>
      </Container>
    </>
  );
}

export default Header;

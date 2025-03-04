import React from "react";

function Tabs({ children, buttons, buttonsContainer="menu"}) {
    let ButtonsContainer = buttonsContainer;
  return (
    
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;

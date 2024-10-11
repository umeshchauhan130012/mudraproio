import React, { useState } from "react";
import Context from "./Context";

function ContextState(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextState;

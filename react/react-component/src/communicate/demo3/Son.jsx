import React from "react";
import { createContext } from "react";

const { Consumer } = createContext();

export default function Son() {
  return (
    <div>
      <h4>Son</h4>
      <Consumer>{(value) => <h4>{value}</h4>}</Consumer>
    </div>
  );
}

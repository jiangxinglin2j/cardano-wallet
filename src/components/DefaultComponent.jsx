import React from "react";
import { Outlet } from "react-router";

function DefaultComponent() {
  return (
    <div><Outlet /></div>
  )
}

export default DefaultComponent;
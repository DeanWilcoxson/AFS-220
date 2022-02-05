import React from "react";
// import { Navigate } from "react-router-dom";
import Auth from "../authentication/Auth.js";
export default function ProtectedRoute(props) {
  return props.auth ? props.comp : <Auth />;
}

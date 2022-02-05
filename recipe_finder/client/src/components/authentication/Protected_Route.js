import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../authentication/Auth.js";

export default function ProtectedRoute(props) {
  const { auth, comp } = props;
  return auth ? comp : <Auth />;
}

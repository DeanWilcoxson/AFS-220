import Auth from "./Auth";
const ProtectedRoute = ({ auth, comp }) => {
  return auth ? comp : <Auth />;
};
export default ProtectedRoute;

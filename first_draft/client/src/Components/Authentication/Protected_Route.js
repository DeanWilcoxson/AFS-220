export default function ProtectedRoute(props) {
  const { auth, comp, redirectTo } = props;
  return auth ? comp : redirectTo ;
}
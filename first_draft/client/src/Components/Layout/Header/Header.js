import { HeaderContainer, HeaderWelcome, HeaderTitle } from "./HeaderElements";
const Header = ({ user }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>FridgeBuddy</HeaderTitle>
      {user ? <HeaderWelcome>Welcome, {user.username}</HeaderWelcome> : <></>}
    </HeaderContainer>
  );
};
export default Header;

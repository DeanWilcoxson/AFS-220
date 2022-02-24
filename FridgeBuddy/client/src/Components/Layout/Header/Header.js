import { HeaderContainer, HeaderWelcome, HeaderTitle } from "./HeaderElements";
const Header = ({ user }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>FridgeBuddy</HeaderTitle>
      {user.username || typeof user.username !== "undefined" ? (
        <HeaderWelcome>Welcome, {user.username}</HeaderWelcome>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
};
export default Header;

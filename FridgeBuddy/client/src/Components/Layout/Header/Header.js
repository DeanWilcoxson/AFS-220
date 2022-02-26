import { HeaderContainer, HeaderWelcome, HeaderTitle } from "./HeaderElements";
const Header = ({ user }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>FridgeBuddy</HeaderTitle>
      {user.username ? (
        <HeaderWelcome>Welcome, {user.username}</HeaderWelcome>
      ) : (
        <>Hello</>
      )}
    </HeaderContainer>
  );
};
export default Header;

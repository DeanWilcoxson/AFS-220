import {
  HeaderContainer,
  HeaderWelcome,
  HeaderTitle,
  Name,
} from "./HeaderElements";
const Header = ({ user }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>FridgeBuddy</HeaderTitle>
      {user ? (
        <HeaderWelcome>
          Welcome, <Name>{user.username}</Name>
        </HeaderWelcome>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
};
export default Header;

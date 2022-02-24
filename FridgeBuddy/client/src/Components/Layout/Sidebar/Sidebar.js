import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  SideBtn,
  CloseIcon,
  Icon,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, logout, token }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {token ? (
        <>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink to="user_home" onClick={toggle}>
                Home
              </SidebarLink>
              <SidebarLink to="/recipes" onClick={toggle}>
                Saved Recipes
              </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SideBtn
                onClick={() => {
                  logout();
                  toggle();
                }}
              >
                Logout
              </SideBtn>
            </SideBtnWrap>
          </SidebarWrapper>
        </>
      ) : (
        <></>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;

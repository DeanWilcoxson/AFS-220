import styled from "styled-components";

export const HeroBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: #232a34;
  z-index: 0;
`;
export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

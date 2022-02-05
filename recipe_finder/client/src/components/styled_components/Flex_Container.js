import styled from "styled-components";
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: auto;

  h4 {
    color: #4d4d4d;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  button {
    border: 2px outset;
    border-radius: 10px;
    color: white;
    background-color: #259cc3;
    padding-left: 15px;
    padding-right: 15px;
  }
  button:hover {
    background-color: green;
  }
`;

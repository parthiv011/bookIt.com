import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 100%;
  width: auto;
`;

export function Logo() {
  return (
    <StyledLogo>
      <Img src="text.png" alt="Logo" />
    </StyledLogo>
  );
}

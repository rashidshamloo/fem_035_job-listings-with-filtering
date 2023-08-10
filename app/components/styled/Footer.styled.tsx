// styled-components
import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.75rem;
  width: 31.25rem;
  max-width: 70%;
  border-top: 1px solid ${({ theme }) => theme.colors.darkGrayishCyan};
  color: ${({ theme }) => theme.colors.darkGrayishCyan};
`;
export const FooterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  & a {
    color: ${({ theme }) => theme.colors.darkGrayishCyan};
    transition: all 300ms ease-out;
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  }

  & > li:last-child {
    margin-left: -0.1875rem;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  & > p > a {
    color: ${({ theme }) => theme.colors.veryDarkGrayishCyan};
    text-decoration: none;
    transition: all 300ms ease-out;
  }

  & > p > a:hover {
    color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    flex-direction: row;
  }
`;

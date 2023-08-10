// styled-components
import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.625rem;
  margin: 3.5rem auto 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    gap: 1.5rem;
    margin: 2.5rem auto 0 auto;
  }
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.grayishCyanFeatured};
  background-image: url('/images/bg-header-mobile.svg');
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  aspect-ratio: 375/156;

  @media screen and (min-width: ${({ theme }) => theme.screen.sm}) {
    background-image: url('/images/bg-header-desktop.svg');
    aspect-ratio: 1440/156;
  }
`;

export const ErrorContainer = styled.div`
  display: inline-block;
  color: red;
  margin: 0 auto;
  padding: 1.25rem 2.5rem;
  font-weight: bold;
  font-size: 1.35rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem ${({ theme }) => theme.colors.grayishCyan};
`;

// sourse: https://tailwindcss.com/docs/screen-readers
export const SROnlyTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

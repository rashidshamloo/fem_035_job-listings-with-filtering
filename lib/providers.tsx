'use client';

// redux toolkit
import { Provider as ReduxProvider } from 'react-redux';
import { reduxStore } from '@/lib/redux/store';

// style registry
import StyledComponentsRegistry from './registry';

// style-components theme
import { ThemeProvider } from 'styled-components';
import theme from '@/app/styles/theme';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <ReduxProvider store={reduxStore}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </StyledComponentsRegistry>
    </ReduxProvider>
  );
};

export default Providers;

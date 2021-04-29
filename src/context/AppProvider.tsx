import React, { ReactNode } from 'react';
import { UtilityProvider } from './util';


interface ProviderProps {
  children: ReactNode;
  pageProps: {
    initialApolloState?: any;
    initialReduxState?: any;
  };
}

export const AppProvider: React.FC<ProviderProps> = ({
  children,
  pageProps,
}) => {

  return (
    <UtilityProvider>
      {children}
    </UtilityProvider>
  );
};

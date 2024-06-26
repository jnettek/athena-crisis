import { Route } from '@deities/apollo/Routes.tsx';
import { ComponentProps, FC } from 'react';
import { Navigate } from 'react-router-dom';

export type NavigateProps = Omit<ComponentProps<typeof Navigate>, 'to'> & {
  to: Route;
};

export default Navigate as FC<NavigateProps>;

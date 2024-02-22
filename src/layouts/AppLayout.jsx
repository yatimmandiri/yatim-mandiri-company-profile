import { HeaderComponent } from '@/components/layouts/HeaderComponent';

export const AppLayout = ({ children }) => {
  return (
    <>
      {/* <HeaderComponent /> */}
      <main>{children}</main>
    </>
  );
};

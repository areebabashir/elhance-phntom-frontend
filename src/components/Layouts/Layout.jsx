import Header from './Header.jsx';
import Footer from './Footer.jsx';

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default Layout;

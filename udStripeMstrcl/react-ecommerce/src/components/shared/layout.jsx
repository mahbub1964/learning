import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => { //console.log("Layout:: children:", children);
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

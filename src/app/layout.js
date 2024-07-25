import Footer from "./componentes/Footer"
import Header from "./componentes/Header"

export const metadata = {
  title: "DIOR",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <br/>
        <Footer/>
        </body>
    </html>
  );
}

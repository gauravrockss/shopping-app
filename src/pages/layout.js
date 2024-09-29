import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';

export default function Layout({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
}

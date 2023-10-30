/* eslint-disable react/prop-types */
import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
export default function Base({ children }) {
    return <>
        <Header />
        {children}
        <Footer/>
    </>
}

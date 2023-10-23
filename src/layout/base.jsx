/* eslint-disable react/prop-types */
import Header from "../components/navigation/header"
import Footer from "../components/footer/footer"
export default function Base({ children }) {
    return <>
        <Header />
        {children}
        <Footer/>
    </>
}

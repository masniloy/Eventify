import Banner from "../components/home/Banner";
import ImageSection from "../components/home/ImageSection";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
    return (
        <div>
            <Banner />
            <About />
            <ImageSection />
            <Contact />
        </div >
    )
}

import Banner from "../components/home/Banner";
import ImageSection from "../components/home/ImageSection";
import About from "./About";
import Contact from "./Contact";
import Events from "./Events";

export default function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Events />
            <ImageSection />
            <Contact />
        </div >
    )
}

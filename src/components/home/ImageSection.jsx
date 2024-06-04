import image1 from "../../assets/ImageSection (1).jpg"
import image2 from "../../assets/ImageSection (2).jpg"
import image3 from "../../assets/ImageSection (3).jpg"
import image4 from "../../assets/ImageSection (4).jpg"
import image5 from "../../assets/ImageSection (5).jpg"
import image6 from "../../assets/ImageSection (6).jpg"
import image7 from "../../assets/ImageSection (7).jpg"
import image8 from "../../assets/ImageSection (8).jpg"
import image9 from "../../assets/ImageSection (9).jpg"
import image10 from "../../assets/ImageSection (10).jpg"
import image11 from "../../assets/ImageSection (11).jpg"
import image12 from "../../assets/ImageSection (12).jpg"
import image13 from "../../assets/ImageSection (13).jpg"
import image14 from "../../assets/ImageSection (14).jpg"
import image15 from "../../assets/ImageSection (15).jpg"
import image16 from "../../assets/ImageSection (16).jpg"


export default function ImageSection() {
    return (
        <div className="my-20">
            <div className=" flex uppercase overflow-hidden ">

                <div className="flex animate-loop-scroll  my-10 hover:paused ">

                    <div className=" flex ">
                        <img src={image1} alt="Image" className=" h-72 m-2" />
                        <img src={image2} alt="Image" className=" h-72 m-2" />
                        <img src={image3} alt="Image" className=" h-72 m-2" />
                        <img src={image4} alt="Image" className=" h-72 m-2" />
                        <img src={image5} alt="Image" className=" h-72 m-2" />
                        <img src={image6} alt="Image" className=" h-72 m-2" />
                        <img src={image7} alt="Image" className=" h-72 m-2" />
                        <img src={image8} alt="Image" className=" h-72 m-2" />
                        <img src={image9} alt="Image" className=" h-72 m-2" />
                        <img src={image10} alt="Image" className=" h-72 m-2" />
                        <img src={image11} alt="Image" className=" h-72 m-2" />
                        <img src={image12} alt="Image" className=" h-72 m-2" />
                        <img src={image13} alt="Image" className=" h-72 m-2" />
                        <img src={image14} alt="Image" className=" h-72 m-2" />
                        <img src={image15} alt="Image" className=" h-72 m-2" />
                        <img src={image16} alt="Image" className=" h-72 m-2" />

                    </div>

                </div>



            </div>
        </div>
    )
}

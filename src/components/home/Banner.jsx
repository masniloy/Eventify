
import bannerImage from '../../assets/Banner.jpg';
import image from '../../assets/image1.jpg';
// import image2 from '../../assets/image2.jpg';
export default function Banner() {
    return (
        <div className="hero min-h-screen -mt-[68px] z-10 " style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className="hero-content flex ">
                <div className='p-10'>
                    <p className="">Experience seamless event planning with our comprehensive platform.</p>
                    <h1 className="text-5xl font-bold">Your Event, Perfectly Managed!</h1>
                    <p className="py-5">Whether it's a corporate gathering, wedding, or community event, our tools and services ensure everything goes off without a hitch. From scheduling to guest management, we've got you covered.</p>
                    <button className="btn bg-transparent border-y-0 border-x-2 font-bold rounded-none border-black hover:bg-transparent backdrop-blur-sm">Get Started</button>
                </div>

                <div className="card shrink-0 w-full max-w-sm border rounded-tl-full rounded-br-full border-black p-3">
                    <img src={image} className="max-w-sm  rounded-tl-full rounded-br-full" />
                </div>
            </div>
        </div>
    );
}

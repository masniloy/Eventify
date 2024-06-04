import aboutImage1 from "../assets/AboutImage (1).jpg"
import aboutImage2 from "../assets/AboutImage (2).jpg"
import aboutImage3 from "../assets/AboutImage (3).jpg"
import aboutImage4 from "../assets/AboutImage (4).jpg"


export default function About() {
    return (
        <div>
            <div className='p-10 bg-gray-100'>
                <div className='container mx-auto'>
                    <h2 className='text-2xl  mb-16 text-center'>________________________________</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

                        <div className="carousel w-full h-96">
                            <div id="slide1" className="carousel-item relative w-full  ">
                                <img src={aboutImage1} className="w-full object-cover" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src={aboutImage2} className="w-full object-cover" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src={aboutImage3} className="w-full object-cover" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src={aboutImage4} className="w-full object-cover" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='mb-4'>
                                At Eventify, we believe that every event, no matter how big or small, deserves to be extraordinary. Our mission is to simplify the event planning process and provide you with the tools you need to create unforgettable experiences.
                            </p>
                            <p className='mb-4'>
                                Whether you're planning a corporate conference, a wedding, or a community gathering, Eventify is here to help you every step of the way. Our platform offers comprehensive event management solutions that cover everything from scheduling and guest management to on-the-day coordination and post-event analysis.
                            </p>
                            <p className='mb-4'>
                                With Eventify, you can easily manage invitations, track RSVPs, set up event agendas, and communicate with attendees all in one place. Our user-friendly interface ensures that even the most complex events can be organized with ease.
                            </p>
                            <p className='mb-4'>
                                Join thousands of satisfied users who have transformed their events into seamless, enjoyable experiences with Eventify. Let us help you turn your vision into reality and make your event a resounding success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const Contact = () => {


    return (
        <div className="container mx-auto p-6 h-screen">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="mb-8">If you have any questions or inquiries, feel free to reach out to us using the form below.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"

                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"

                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"

                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                rows="5"
                                required
                            />
                        </div>
                        <div>
                            <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>
                    </form>

                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Our Office</h2>
                    <p className="mb-4">1234 Eventify Lane<br />Event City, EC 12345</p>
                    <p className="mb-4">Phone: (123) 456-7890</p>
                    <p className="mb-8">Email: support@eventify.com</p>

                    <h2 className="text-2xl font-bold mb-4">Find Us Here</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.513452491527!2d144.96315761531587!3d-37.81627997975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4cda2d10e1c8b5c!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1636829141122!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;

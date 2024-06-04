import { Link, useNavigate } from "react-router-dom"
// import logo from "../assets/logo.png"
import LoginWithGoogle from "../components/auth/LoginWithGoogle"
import LoginWithFacebook from "../components/auth/LoginWithFacebook"
import LOginWithGithub from "../components/auth/LOginWithGithub"
import auth from "../firebase/firebase.comfig"
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { useEffect } from "react"
export default function Register() {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword] =
        useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUserWithEmailAndPassword(email, password);
    };

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, loading, navigate, from]);

    return (
        <div className="min-h-screen flex sm:items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">

                <div className="md:w-1/2 p-8 md:border-r-4 md:border-b-0 border-b-4 border-color1">
                    <h2 className="text-2xl font-bold text-color text-center mb-8">Register</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="joe@email.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="Enter your Password"
                            />
                        </div>
                        {/* <div className="mb-4">
                            <label className="block text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-color"
                                placeholder="Confirm your Password"
                            />
                        </div> */}

                        <div className="flex items-center justify-between mb-4">
                            <a href="#" className="text-sm text-red-600 hover:underline">forgot password?</a>
                        </div>
                        <button className="w-full bg-color text-white py-2 rounded-lg hover:bg-color transition duration-200" >
                            Register
                        </button>

                        <div className="flex items-center justify-between mt-4">
                            <p className=" text-sm">Have an account</p> <Link to={"/login"} className=" text-red-600 text-sm"><p>login</p></Link>
                        </div>
                    </form>
                </div>

                <div className="md:w-2/3 bg-color p-8 flex flex-col justify-center items-center ">
                    <div className="text-white text-center ">
                        {/* <img
                            src={logo} // Replace with your logo path
                            alt="Buggybites Logo"
                            className="w-32 h-32 mx-auto mb-4"
                        /> */}
                        <h1 className="text-2xl font-bold mb-2">Buggy Bites</h1>
                        <p className="text-sm text-color1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro dicta eligendi amet? Aspernatur odio dolore aliquam itaque quidem sit. Quasi!</p>

                        <p className="mt-10 text-sm">Or Register Using</p>
                        <div className=" flex items-center justify-center gap-5 mt-2">
                            <LoginWithGoogle />
                            <LoginWithFacebook />
                            <LOginWithGithub />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.comfig';
import { Navigate } from 'react-router-dom';
/* eslint-disable react/prop-types */
export default function PrivateRoutes({ children }) {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div className=' w-full h-screen flex justify-center'>
            <span className="loading loading-ring loading-lg text-color"></span>
        </div>
    }

    if (!user) {
        return <Navigate to={'/login'} />
    }

    return children;
}

import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/Routes'

function App() {


  return (
    <div className='bg-color'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

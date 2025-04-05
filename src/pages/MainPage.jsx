import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import ChatPage from './ChatPage';
import Calculator from '../components/Calculator';
import { useAuth } from '../services/auth';
import logo from '../assets/logo.png'

export default function MainPage() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white flex justify-between items-center">
        <img src={logo} width="80px" className='pl-[15px] scale-[1.4]' alt="" />
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              {user?.email?.charAt(0).toUpperCase()}
            </span>
            {user?.email}
          </span>
          <button 
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-3 py-1 mr-4 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        <Layout>
          <Routes>
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="*" element={<ChatPage />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}
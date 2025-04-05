import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white text-gray-800 p-4 flex flex-col border-r border-gray-200">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Tax Code Assistant</h1>
        <div className="text-sm text-gray-500">AI Assistant</div>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/app/chat"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg ${isActive ? 'bg-gray-100 font-medium text-gray-900' : 'hover:bg-gray-50 text-gray-700'}`
              }
            >
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/app/calculator"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg ${isActive ? 'bg-gray-100 font-medium text-gray-900' : 'hover:bg-gray-50 text-gray-700'}`
              }
            >
              Calculator
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
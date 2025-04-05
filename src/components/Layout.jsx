import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1 overflow-auto p-4 bg-gray-50">
        {children}
      </div>
    </div>
  );
}
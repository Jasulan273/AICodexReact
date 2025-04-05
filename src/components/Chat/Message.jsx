export default function Message({ text, sender }) {
  return (
    <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-3/4 p-4 rounded-xl ${
          sender === 'user' 
            ? 'bg-blue-500 text-white rounded-tr-none' 
            : 'bg-gray-100 text-gray-800 rounded-tl-none'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
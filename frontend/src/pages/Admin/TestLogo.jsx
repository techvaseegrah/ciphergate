import { useState } from 'react';
import ShatteredLogo from '../../components/common/ShatteredLogo';

const TestLogo = () => {
  const [key, setKey] = useState(0); // Used to reset the animation
  
  const restartAnimation = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Shattered Logo Demo</h1>
        
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-24 h-24 mb-4">
            <ShatteredLogo 
              key={key} // Reset animation when key changes
              src="/logo.png" 
              alt="Demo Logo"
              className="w-full h-full"
            />
          </div>
          <p className="text-center text-gray-600">
            The logo above will shatter and reassemble every 2 seconds
          </p>
        </div>
        
        <div className="text-center">
          <button
            onClick={restartAnimation}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Restart Animation
          </button>
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-blue-800">How it works</h2>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li>The logo breaks into multiple pieces</li>
            <li>Pieces fly outward in random directions</li>
            <li>After 1.5 seconds, pieces fade out</li>
            <li>A new complete logo fades in smoothly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestLogo;
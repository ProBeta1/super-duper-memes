import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});







// <div className="flex-col justify-end items-end w-1/6 h-2/3">

// <div className="w-1/6 h-2/3 bg-orange-300 text-sm font-mono border-pink-700 border-4 p-4 rounded-full">


//   <div className="flex-col justify-start text-2xl">
//     <div className="bg-red-300 flex justify-center border-4 rounded-full m-2">
//       <button onClick={this.setBTS} className="bg-blue-400 rounded-lg border-pink-500 hover:bg-blue-700 p-4 m-2 font-bold hover:text-gray-200">
//         BTS
//       </button>
//     </div>

//     <div className="bg-blue-300 flex justify-center border-4 rounded-full m-2">
//       <button onClick={this.setTwice} className="bg-red-400 rounded-lg border-pink-500 hover:bg-blue-700 p-4 m-2 font-bold hover:text-gray-200">
//         Twice
//       </button>
//     </div>

//     <div className="bg-purple-300 flex justify-center border-4 rounded-full m-2">
//       <button onClick={this.setWalker} className="bg-gray-400 rounded-lg border-pink-500 hover:bg-blue-700 p-4 m-2 font-bold hover:text-gray-200">
//         Walker
//       </button>
//     </div>
//   </div>


//   <div className="flex justify-center items-center p-2 text-xl">
//     <button
//       onClick={this.playMeme}
//       className="bg-green-400 rounded-full border-green-800 font-bold hover:bg-green-200 p-6 m-3 uppercase text-gray-100 hover:text-gray-700 "
//     >
//       Play
//     </button>
//     <button
//       onClick={this.pauseMeme}
//       className="bg-red-500 rounded-full border-red-800 hover:bg-red-700 hover:text-yellow-400 font-bold p-6 m-3 uppercase text-gray-100 "
//     >
//       Download
//     </button>
//   </div>

// </div>

// <div>
//   <ReactPlayer
//     url={this.state.videoUrl}
//     //playing={true}
//     controls={true}
//     height={100}
//   />
// </div>

// </div>
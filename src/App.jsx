import React, { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState('');
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration);

  const generateImage = async() => {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512"
    });
    console.log(response.data.data[0].url);
  }
  return (
    <div className="flex items-center justify-center flex-col py-5 bg-black">
      <h1 className='text-white' >Generate Image</h1>
      <div className=" py-5">
        <input
          className='outline-black border-black rounded px-6'
          placeholder='Type in words to indicate the image needed'
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
        />
      </div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={generateImage}>Generate Image</button>
    </div>
  )
}

export default App

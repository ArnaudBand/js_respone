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
      prompt: "Say this is a test",
      n: 1,
      size: "512x512"
    })
  }
  return (
    <div className="">

    </div>
  )
}

export default App

import { useState } from "react";
import axios from "axios";

const TestGemini = () => {
    const [prompt, setPrompt] = useState("");
    const [response , setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async() => {
        //checking if no prompt
        if(!prompt.trim()) return;

        //import url
        const API_URL = import.meta.env.VITE_API_URL;
        console.log( "API URL:", API_URL);

        setLoading(true);
        setResponse("");

        try{
            const res = await axios.post(`${API_URL}/testgemini`, {prompt});
            setResponse(res.data.summary);

        }catch(error){
            console.error(error);
            setResponse("Error connecting to backend");
        }

        setLoading(false);
    }

    return(
         <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full max-w-xl bg-white p-6 shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Test Gemini API</h1>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Ask something..."
          rows={4}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Thinking..." : "Send"}
        </button>

        {response && (
          <div className="mt-4 p-3 bg-gray-100 border rounded-lg whitespace-pre-wrap">
            <strong>Response:</strong>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
    )
} 

export default TestGemini;
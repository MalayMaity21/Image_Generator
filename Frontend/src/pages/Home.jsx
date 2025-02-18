import axios from "axios";
import { useState } from "react";
import Loading from "../components/Loader/Loader";
export default function Home() {
  const [userPrompt, setUserPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(false);
  const textGenerate = async () => {
    console.log("clicked");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://lexigen3.onrender.com/generate-text",
        {
          prompt: userPrompt,
        }
      );
      setGeneratedText(response.data.generatedText);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-start h-auto px-4 overflow-auto">
      <div>
        <div>
          <h1 className="text-6xl font-bold text-center mb-4 max-w-5xl text-gray-300 capitalize">
            how Can i help you ?
          </h1>

          <div className="relative w-full max-w-2xl ">
            <input
              type="text"
              placeholder="Enter the prompt"
              className="w-full my-6 p-4 pr-24 border-2  text-black rounded-lg focus:outline-none bt"
              onChange={(e) => setUserPrompt(e.target.value)}
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={textGenerate}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>
        <div>
          {loading && <Loading />}
          {generatedText && (
            <textarea
              className="mt-6 w-full max-w-2xl p-4 border-2 text-black rounded-lg focus:outline-none  resize-y overflow-auto   txt"
              value={generatedText.replace(/\*\*/g, "").replace(/\*/g, "- ")}
              readOnly
            />
          )}
        </div>
      </div>
    </div>
  );
}

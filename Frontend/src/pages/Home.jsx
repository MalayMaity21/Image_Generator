export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4">
      <h1 className="text-6xl font-bold text-center mb-4 max-w-5xl">
        Create a Stunning Image <br /> with the Power of AI
      </h1>
      <p className="text-lg text-center mb-6 max-w-lg">
        Unleash your creativity! Enter a prompt, and let AI generate a unique
        image based on your imagination.
      </p>
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          placeholder="Enter the prompt"
          className="w-full p-4 pr-24 border-2 text-black rounded-lg focus:outline-none"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Generate
        </button>
      </div>
    </div>
  );
}

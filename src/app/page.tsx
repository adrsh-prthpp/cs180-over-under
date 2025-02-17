export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in">
          Welcome to Over/Under
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
          The ultimate betting experience. Make your predictions, challenge your friends, and win big.
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all">
          Get Started
        </button>
      </div>

      {/* Floating Glow Effect */}
      <div className="absolute bottom-10 w-60 h-60 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
    </div>
  );
}

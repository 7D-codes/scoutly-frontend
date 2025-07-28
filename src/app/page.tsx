import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden h-screen bg-white backdrop-blur-lg bg-gradient-to-b from-[#bde0fe]/80 to-[#fdd1ae]/60 shadow-inner border-white">
      <div className="flex flex-col items-center justify-center h-full gap-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-6xl font-sans font-light text-gray-800">
            Scoutly
          </h1>
          <p className="text-sm text-gray-500">
            AI-powered scouting startup search engine
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

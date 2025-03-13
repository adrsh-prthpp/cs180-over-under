interface SelectionButtonsProps {
    selectedSide: "over" | "under" | null;
    setSelectedSide: (side: "over" | "under") => void;
  }
  
  export default function SelectionButtons({ selectedSide, setSelectedSide }: SelectionButtonsProps) {
    return (
      <div className="flex justify-between mt-4">
        <button
          className={`w-1/2 px-4 py-2 font-semibold rounded-l-md transition-all ${
            selectedSide === "over"
              ? "bg-green-500 text-white"
              : "bg-gray-700 hover:bg-green-400"
          }`}
          onClick={() => setSelectedSide("over")}
        >
          Over
        </button>
        <button
          className={`w-1/2 px-4 py-2 font-semibold rounded-r-md transition-all ${
            selectedSide === "under"
              ? "bg-red-500 text-white"
              : "bg-gray-700 hover:bg-red-400"
          }`}
          onClick={() => setSelectedSide("under")}
        >
          Under
        </button>
      </div>
    );
  }
  
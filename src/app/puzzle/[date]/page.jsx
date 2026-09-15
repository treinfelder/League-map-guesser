export default function PuzzleDatePage({ params }) {
  const { date } = params;

  return (
    <main className="p-8 max-w-3xl mx-auto text-center">
      <div className="flex flex-col items-center w-full">

        <header className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Puzzle for {date}</h1>
          <p className="text-gray-400 text-lg">
            Solve the LeagueMaster minimap puzzle for this date.
          </p>
        </header>

        {/* Add puzzle content for this date */}
        <p className="text-gray-500 mt-4">
          Puzzle content for {date} goes here.
        </p>

      </div>
    </main>
  );
}

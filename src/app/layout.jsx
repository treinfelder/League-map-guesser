import "./globals.css";

export const metadata = {
  title: "LeagueMaster",
  description: "Daily League of Legends Minimap Puzzle",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <main className="w-full max-w-3xl px-4 py-8 flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}

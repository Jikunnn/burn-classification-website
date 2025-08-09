import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="p-8 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Burn Classification
        </h1>
        <p className="mb-6">
          Your platform for managing burn classification tasks.
        </p>
        <Link href="/login">
          <button className="px-6 py-3 text-lg rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </main>
    </div>
  );
}

{
  /* <Link href="/login">
          <button className="px-6 py-3 text-lg rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link> */
}

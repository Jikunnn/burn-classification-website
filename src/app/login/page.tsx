import Link from "next/link";
export default function Login() {
  return (
    <main className="p-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-4 w-full max-w-xs">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <Link
          href="/dashboard"
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </Link>
      </form>
    </main>
  );
}

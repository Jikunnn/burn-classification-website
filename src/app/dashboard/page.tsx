import Navbar from "@/components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>
          Welcome to your dashboard. Here you can manage your burn
          classification tasks.
        </p>
      </main>
    </div>
  );
}

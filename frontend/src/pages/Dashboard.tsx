const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1c2e] to-[#000000] text-white p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Welcome, User!</h1>
        <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold">
          Logout
        </button>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#101827] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
          <p className="text-gray-400">Complete your next lessons to level up.</p>
          <div className="mt-4 w-full bg-gray-700 rounded-full h-3">
            <div className="bg-cyan-400 h-3 rounded-full w-3/4"></div>
          </div>
        </div>

        <div className="bg-[#101827] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Upcoming Tests</h2>
          <ul className="text-gray-300 list-disc list-inside">
            <li>Math - June 10</li>
            <li>English - June 12</li>
            <li>Science - June 15</li>
          </ul>
        </div>

        <div className="bg-[#101827] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-cyan-400 hover:underline">Your Tasks</a>
            <a href="#" className="text-cyan-400 hover:underline">Resources</a>
            <a href="#" className="text-cyan-400 hover:underline">Support</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

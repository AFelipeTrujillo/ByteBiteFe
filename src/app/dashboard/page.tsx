export default function DashboardPage() {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Welcome back!</h2>
        <p className="text-gray-600">This is where your meal planning magic happens.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg text-orange-600">Active Plan</h3>
            <p className="text-3xl font-bold mt-2">Week 12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-semibold text-lg text-orange-600">Recipes</h3>
            <p className="text-3xl font-bold mt-2">24</p>
          </div>
        </div>
      </div>
    );
  }
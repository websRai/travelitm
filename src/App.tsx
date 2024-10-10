import React, { useState } from 'react';
import { Plane, Hotel, MapPin, Sun, Calendar, DollarSign } from 'lucide-react';
import TravelForm from './components/TravelForm';
import Itinerary from './components/Itinerary';
import { TravelPlan } from './types';

function App() {
  const [travelPlan, setTravelPlan] = useState<TravelPlan | null>(null);

  const handlePlanCreation = (plan: TravelPlan) => {
    setTravelPlan(plan);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2 flex items-center justify-center">
          <Plane className="mr-2" />
          Travel Itinerary Planner
        </h1>
        <p className="text-gray-600">Plan your perfect trip with personalized recommendations</p>
      </header>

      <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        {!travelPlan ? (
          <TravelForm onSubmit={handlePlanCreation} />
        ) : (
          <Itinerary plan={travelPlan} />
        )}
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>© 2023 Travel Itinerary Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
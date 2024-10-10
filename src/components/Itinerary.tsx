import React from 'react';
import { format } from 'date-fns';
import { Sun, Cloud, Umbrella, MapPin, Hotel, Utensils, Car } from 'lucide-react';
import { TravelPlan } from '../types';

interface ItineraryProps {
  plan: TravelPlan;
}

const Itinerary: React.FC<ItineraryProps> = ({ plan }) => {
  const { destination, startDate, endDate, budget } = plan;

  // Mock data for demonstration purposes
  const weatherForecast = [
    { date: new Date(startDate), temp: 25, condition: 'sunny' },
    { date: new Date(startDate.getTime() + 86400000), temp: 23, condition: 'cloudy' },
    { date: new Date(startDate.getTime() + 172800000), temp: 22, condition: 'rainy' },
  ];

  const activities = [
    { name: 'Visit local museum', cost: 15 },
    { name: 'Guided city tour', cost: 30 },
    { name: 'Beach day', cost: 0 },
  ];

  const accommodation = {
    name: 'Cozy Hotel',
    cost: 100,
    address: '123 Main St, City Center',
  };

  const transportation = {
    type: 'Rental Car',
    cost: 50,
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-6 h-6 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-6 h-6 text-gray-500" />;
      case 'rainy':
        return <Umbrella className="w-6 h-6 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Your Travel Itinerary</h2>
      <div className="bg-blue-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Trip Overview</h3>
        <p className="flex items-center"><MapPin className="mr-2" /> Destination: {destination}</p>
        <p>Dates: {format(startDate, 'MMM d, yyyy')} - {format(endDate, 'MMM d, yyyy')}</p>
        <p>Budget: ${budget}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Weather Forecast</h3>
        <div className="flex space-x-4">
          {weatherForecast.map((day, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow text-center">
              <p className="text-sm text-gray-600">{format(day.date, 'MMM d')}</p>
              {getWeatherIcon(day.condition)}
              <p className="font-bold">{day.temp}°C</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Accommodation</h3>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="flex items-center"><Hotel className="mr-2" /> {accommodation.name}</p>
          <p className="text-sm text-gray-600">{accommodation.address}</p>
          <p className="text-sm font-semibold mt-1">Cost: ${accommodation.cost}/night</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Activities</h3>
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="bg-white p-3 rounded-lg shadow flex justify-between items-center">
              <span>{activity.name}</span>
              <span className="text-sm font-semibold">${activity.cost}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Transportation</h3>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="flex items-center"><Car className="mr-2" /> {transportation.type}</p>
          <p className="text-sm font-semibold mt-1">Cost: ${transportation.cost}/day</p>
        </div>
      </div>

      <div className="bg-green-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Local Events</h3>
        <p>Check out these upcoming events during your stay:</p>
        <ul className="list-disc list-inside text-sm text-green-700">
          <li>Street Food Festival (June 15-17)</li>
          <li>Summer Music Concert (June 18)</li>
          <li>Local Art Exhibition (June 20-25)</li>
        </ul>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Cultural Experiences</h3>
        <p>Don't miss these authentic local experiences:</p>
        <ul className="list-disc list-inside text-sm text-yellow-700">
          <li>Traditional Cooking Class</li>
          <li>Visit to Historical Landmarks</li>
          <li>Local Handicraft Workshop</li>
        </ul>
      </div>
    </div>
  );
};

export default Itinerary;
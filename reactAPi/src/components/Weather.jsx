import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../store/WeatherSlice';

export default function Weather() {
  const [location, setLocation] = useState('London');
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather('London'));
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchWeather(location));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={location}
          placeholder="Enter location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <ul>
          <li>Place: {data.place}</li>
          <li>Date: {data.date}</li>
          <li>Time: {data.time}</li>
          <li>Temperature: {data.temperature}°C</li>
        </ul>
      )}
    </>
  );
}
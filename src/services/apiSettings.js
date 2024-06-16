import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_API_URL;

export async function getSettings() {
  try {
    const response = await axios.get(`${BACKEND_URL}user/settings`);
    const data = response.data.settings;
    // console.log(data);
    return data[0];
  } catch (error) {
    console.error('Error fetching cabins:', error);
    throw error;
  }
}

export async function updateSettings(newSettings) {
  try {
    console.log(newSettings);
    const response = await axios.put(`${BACKEND_URL}user/settings`, {
      minBookingLength: newSettings.minBookingLength,
      maxBookingLength: newSettings.maxBookingLength,
      maxGuestsPerBooking: newSettings.maxGuestsPerBooking,
      breakfast: newSettings.breakfast,
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error updating settings:', error); // Updated error message
    throw error;
  }
}

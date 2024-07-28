import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_API_URL;

export async function getAllBookings({ filter }) {
  let response;
  if (!filter) {
    try {
      response = await axios.get(`${BACKEND_URL}user/bookings`);
      const bookings = response.data.bookings;

      return bookings;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  } else {
    try {
      response = await axios.get(
        `${BACKEND_URL}user/bookingfilter?filter=${filter.value}`
      );
      const bookings = response.data.bookings;

      return bookings;
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  }
}
export async function getBookingsAfterDate(date) {
  try {
    const response = await axios.get(
      `${BACKEND_URL}user/booking?date=${date}`,
      {
        withCredentials: true,
      }
    );
    const bookings = response.data.bookings;
    return bookings;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
}
export async function getStaysAfterDate(date) {
  try {
    const response = await axios.get(`${BACKEND_URL}user/stays?date=${date}`, {
      withCredentials: true,
    });
    const stays = response.data.stays;
    // console.log(stays);
    return stays;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
}
export async function getBookingById(id) {
  try {
    const response = await axios.get(`${BACKEND_URL}user/booking/${id}`, {
      withCredentials: true,
    });
    const booking = response.data.booking;
    return booking;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
}

import { useQuery } from '@tanstack/react-query';
import { getAllBookings } from '../../services/apiBooking';

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings'],
    queryFn: getAllBookings,
  });

  return { isLoading, bookings, error };
}

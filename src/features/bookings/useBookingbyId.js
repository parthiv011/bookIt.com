import { useQuery } from '@tanstack/react-query';
import { getBookingById } from '../../services/apiBooking';
import { useParams } from 'react-router-dom';

export function useBookingbyId() {
  const { bookingId } = useParams();
  console.log(bookingId);
  const {
    data: booking,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => getBookingById(bookingId),
    queryKey: ['booking', bookingId],
  });
  return { booking, isLoading, error };
}

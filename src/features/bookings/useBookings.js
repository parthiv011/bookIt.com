import { useQuery } from '@tanstack/react-query';
import { getAllBookings } from '../../services/apiBooking';
import { useSearchParams } from 'react-router-dom';

export function useBookings() {
  const [searchParmas] = useSearchParams();

  const filterValue = searchParmas.get('Status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : { field: 'Status', value: filterValue };

  // const sortValue = searchParmas.get('sortBy');
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ['bookings', filter],
    queryFn: () => getAllBookings({ filter }),
  });

  return { isLoading, bookings, error };
}

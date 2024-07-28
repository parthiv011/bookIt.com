import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getStaysAfterDate } from '../../services/apiBooking';

export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queryDate = subDays(new Date(), numDays);

  const { isLoading, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ['stays', `last-${numDays}`],
  });

  // console.log(stays);
  const confirmedStays = stays?.filter(
    (stay) => stay.status === 'checkedIn' || stay.status === 'checkedOut'
  );
  // console.log(confirmedStays);
  return { stays, isLoading, confirmedStays, numDays };
}

import styled from 'styled-components';
import { Spinner } from '../../ui/Spinner';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import { useCabins } from '../cabins/useCabins';
import { Stats } from './Stats';
import { SalesChart } from './SalesChart';
import { DurationChart } from './DurationChart';
// import { SalesChart } from './SalesChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: loading1 } = useRecentBookings();
  const { stays, confirmedStays, isLoading, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading2 } = useCabins();
  if (isLoading || loading1) <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabin={cabins}
      />
      <div>Today's Activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

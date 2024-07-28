import Stat from './Stat';
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineChartBar,
} from 'react-icons/hi';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

export const Stats = ({ confirmedStays, bookings, numDays, cabin }) => {
  const bookingsCount = bookings ? bookings.length : 0;
  const sales = Array.isArray(bookings)
    ? bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
    : 0;
  // console.log(confirmedStays);
  const confirmedStaysCount = confirmedStays ? confirmedStays.length : 0;

  // num of checkedin nights/ num available nights* cabins available
  const occupancy = Math.abs(
    confirmedStays
      ? confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0)
      : 0
  );
  const cabinCount = cabin ? cabin.length : 0;

  const occupancyRate = Math.round(occupancy / (numDays * cabinCount)) + '%';

  // console.log(sales);
  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={bookingsCount}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        icon={<HiOutlineCalendar />}
        value={confirmedStaysCount}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={occupancyRate}
      />
    </>
  );
};

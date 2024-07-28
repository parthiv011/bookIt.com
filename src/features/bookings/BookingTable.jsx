import { Menus } from '../../ui/Menus';
import { Table } from '../../ui/Table';
import { Empty } from '../../ui/Empty';
import { Spinner } from '../../ui/Spinner';
import { BookingRow } from '../bookings/BookingRow';
import { useBookings } from './useBookings';
import { Pagination } from '../../ui/Pagination';

export const BookingTable = () => {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings) return <Empty resource="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guests</div>
          <div>Date</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            // console.log(booking)
            <BookingRow key={booking.id} booking={booking} />
          )}
        ></Table.Body>

        <Table.Footer>
          <Pagination count={5} />
        </Table.Footer>
      </Table>
    </Menus>
  );
};

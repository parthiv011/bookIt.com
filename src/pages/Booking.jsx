import React from 'react';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import { BookingTable } from '../features/bookings/BookingTable';
import { BookingTableOperations } from '../features/bookings/BookingTableOperations';

export const Booking = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Booking</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
};

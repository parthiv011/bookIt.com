import React from 'react';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import { BookingTable } from '../features/bookings/BookingTable';

export const Booking = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Booking</Heading>
      </Row>

      <BookingTable />
    </>
  );
};

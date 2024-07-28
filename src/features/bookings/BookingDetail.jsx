import styled from 'styled-components';

import { BookingBox } from './BookingBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import { Tag } from '../../ui/Tag';
import { Spinner } from '../../ui/Spinner';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBookingbyId } from '../bookings/useBookingbyId';
const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

export function BookingDetail() {
  const { booking, isLoading } = useBookingbyId();

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: 'blue',
    checkedIn: 'green',
    checkedOut: 'silver',
  };
  if (isLoading) return <Spinner />;

  const { status } = booking;
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {booking.id}</Heading>
          <Tag type={statusToTagName[status]}>{status}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingBox booking={booking} />

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

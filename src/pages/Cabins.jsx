import React from 'react';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import CabinTable from '../features/cabins/CabinTable';

export const Cabins = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as={'h1'}>All Cabins</Heading>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
};

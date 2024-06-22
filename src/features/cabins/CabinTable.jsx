import { CabinRow } from './CabinRow';
import { useCabins } from './useCabins';
import { Menus } from '../../ui/Menus';
import { Table } from '../../ui/Table';
import { Spinner } from '../../ui/Spinner';
import { useSearchParams } from 'react-router-dom';

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filteredValue = searchParams.get('discount') || 'all';
  let filteredCabins;
  if (filteredValue === 'all') {
    filteredCabins = cabins;
  }
  if (filteredValue === 'no-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }
  if (filteredValue === 'with-discount') {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  // Sorting
  const sortBy = searchParams.get('sortBy') || 'StartDate-asc';
  const [field, direction] = sortBy.split('-');
  // console.log(field, direction);
  const modifier = direction === 'asc' ? 1 : -1;
  // console.log(modifier);

  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  // console.log(sortedCabins);
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;

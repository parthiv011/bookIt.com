import Sort from '../../ui/Sort';
import Filter from '../../ui/Filter';
import TableOperations from '../../ui/TableOperations';

export function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="Status"
        options={[
          { value: 'all', label: 'All' },
          { value: 'checkedOut', label: 'Checked out' },
          { value: 'checkedIn', label: 'Checked in' },
          { value: 'unconfirmed', label: 'Unconfirmed' },
        ]}
      />

      <Sort
        options={[
          { value: 'startDate-desc', label: 'Sort by date (recent first)' },
          { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
          {
            value: 'totalPrice-desc',
            label: 'Sort by amount (high first)',
          },
          { value: 'totalPrice-asc', label: 'Sort by amount (low first)' },
        ]}
      />
    </TableOperations>
  );
}

// export default BookingTableOperations;

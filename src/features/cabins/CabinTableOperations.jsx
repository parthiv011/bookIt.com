import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import Sort from '../../ui/Sort';

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filteredField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />

      <Sort  options={[
        {value: 'name-asc' , label: 'Sort by name (A-Z)'},
        {value: 'regulaPrice-asc' , label: 'Sort by price (low-high)'},
        {value: 'regularPrice-desc' , label: 'Sort by price (high-low)'},
        {value: 'maxCapacity-asc' , label: 'Sort by capacity (low-high)'},
      ]}/>
    </TableOperations>
  );
}

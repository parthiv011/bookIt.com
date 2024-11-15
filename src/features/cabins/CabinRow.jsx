import styled from 'styled-components';
import { HiPencil, HiTrash, HiClipboard } from 'react-icons/hi';
import { formatCurrency } from '../../utils/helpers';
import { CreateCabinForm } from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { useCreateCabin } from './useCreateCabin';
import Modal from '../../ui/Modal';
import { ConfirmDelete } from '../../ui/ConfirmDelete';
import { Table } from '../../ui/Table';
import { Menus } from '../../ui/Menus';

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;
const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Price = styled.div`
  font-weight: 600;
`;

const Discount = styled.div`
  font-weight: 500;
  color: var(--color-green-700);
`;

export const CabinRow = ({ cabin }) => {
  const { isDeleting, mutateDelete } = useDeleteCabin();
  const { isCreating, mutateCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    mutateCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      description,
      discount,
      image,
    });
  }
  return (
    <>
      <Table.Row role="row">
        <Img src={`${image}`} alt={name} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} people</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <Modal>
            {/* For button List to work */}
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />
              <Menus.List id={cabinId}>
                <Menus.Button icon={<HiClipboard />} onClick={handleDuplicate}>
                  Duplicate
                </Menus.Button>

                <Modal.OpenWindow opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.OpenWindow>

                <Modal.OpenWindow opens="confirm-delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.OpenWindow>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name="confirm-delete">
                <ConfirmDelete
                  resourceName={'Cabins'}
                  disabled={isDeleting}
                  onConfirm={() => mutateDelete(cabinId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
};

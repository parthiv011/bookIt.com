import Button from '../../ui/Button';
import { CreateCabinForm } from './CreateCabinForm';
import Modal from '../../ui/Modal';

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.OpenWindow opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.OpenWindow>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// export const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return
// optimize the UI for more flexibility(convert to compound component)
// <div>
//   <Button onClick={() => setIsOpenModal((show) => !show)}>
//     Add new Cabin
//   </Button>
//   {isOpenModal && (
//     <Modal onClose={() => setIsOpenModal(false)}>
//       <CreateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
//     </Modal>
//   )}
// </div>
// };

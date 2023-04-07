import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';


const CardForm = props => {
  const [title, setTitle] = useState('');
  const columnId = props.columnId;
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ columnId, title }));
    setTitle('');
    console.log(title);
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Add card..." />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ColumnForm.module.scss';


const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const listId = props.listId;
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ listId, title, icon }));
    setTitle('');
    setIcon('');
  };


  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Type title..." />
      <span>Icon:</span>
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} placeholder="Type name of an icon..." />
      <Button>Add new column</Button>
    </form>
  );
};

export default ColumnForm;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ColumnForm.module.scss';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { id: shortid(), title, icon } });
    setTitle('');
    setIcon('');
 };
  

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Type title..."/>
      <span>Icon:</span>
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} placeholder="Type name of an icon..."/>
      <Button>Add new column</Button>
    </form>
  );
};

export default ColumnForm;
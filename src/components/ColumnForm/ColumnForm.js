import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = props => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
  };

  return (
    <form class={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Type title..."/>
      <span>Icon:</span>
      <TextInput value={icon} onChange={e => setIcon(e.target.value)} placeholder="Type name of an icon..."/>
      <Button>Add new column</Button>
    </form>
  );
};

export default ColumnForm;
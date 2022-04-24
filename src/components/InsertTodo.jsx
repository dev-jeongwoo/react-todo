import { useCallback, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './InsertTodo.scss';

const InsertTodo = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const input = useRef(null);

  const onChange = useCallback(({ target }) => setValue(target.value), []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
      input.current.focus();
    },
    [value, onInsert],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="write todo things..."
        value={value}
        onChange={onChange}
        ref={input}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default InsertTodo;

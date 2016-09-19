import React, { propTypes } from 'react';
import Button from 'react-bootstrap/lib/Button.js';

const NoteItem = ({note, actions, content, onChange, onAdd, onSave, onDelete}) => {
  return (
    <div className='notes-list'>
      <form>
        <textarea className="note-content"
          type="text"
          value={content}
          onChange={onChange}
        >
        </textarea>
        <Button onClick={onSave}>Update</Button>
        <Button onClick={onAdd}>Add</Button>
        <Button onClick={onDelete}>Delete</Button>
      </form>
    </div>
  )
};

export default NoteItem;
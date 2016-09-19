import React from 'react';

const NoteList = ({notes_list, onSelect}) => {
  return (
    <ul className="notes-list">
      {
        notes_list.map((note, index) => {
          let title = note.content.substr(0,15);
          return (
            <li 
              key={note.id}
              className={note.id}
              onClick={onSelect}
              >
              {title}
            </li>
          );
        })
      }
    </ul>
  )
};

export default NoteList;
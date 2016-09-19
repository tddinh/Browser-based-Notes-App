export default function noteReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_NOTE':
      let id = state.length;
      if(state.length > 0) {
        id = state[state.length-1].id + 1;
      }
      let note = {
          id: id,
          content: action.content
        }
      return [...state, note];

    case 'LOAD_NOTES':
      return state;

    case 'SELECT_NOTE':
      return [
        ...state,
        ...state.filter(note => {
          if(note.id === action.id) {
            return note;
          };
        })
      ];

    case 'SAVE_NOTE':
      console.log('save note', action.id, action.content)
      return [
        ...state.map(note => {
          if(note.id == action.id) {
            let edit = {
              id: action.id,
              content: action.content
            };
            return Object.assign({}, edit);
          } else {
            return note;
          }
        })
      ];

    case 'DELETE_NOTE':
      let selected =[...state][action.id];
      return [
        ...state.filter(note => {
          if(note.id !== selected.id) {
            return note;
          };
        })
      ];

    default:
      return state;
  };
};
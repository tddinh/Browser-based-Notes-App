import * as types from './action_types';

export function createNote(content) {
  return { type: 'CREATE_NOTE', content }
};

export function loadNotes() {
  return { type: 'LOAD_NOTES', }
};

export function selectNote(id) {
  return { type: 'SELECT_NOTE', id }
};

export function saveNote(id, content) {
  return { type: 'SAVE_NOTE', id, content }
};

export function deleteNote(id) {
  return { type: 'DELETE_NOTE', id }
};
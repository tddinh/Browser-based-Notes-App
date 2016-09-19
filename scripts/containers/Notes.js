import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as noteActions from '../actions/note_action.js';
import NotePad from '../components/NotePad.js';

class Note extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      note: Object.assign({}, this.props.note),
      content: this.props.content,
      current_id: this.props.id
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onChange(event) {
    this.setState({content: event.target.value});
  }

  onSelect(event) {
    console.log(event.target.className)
    this.props.actions.selectNote(event.target.className);
    this.setState({content: this.props.notes_list[event.target.className].content});
    this.setState({current_id: event.target.className});
  }

  onAdd(event) {
    event.preventDefault();
    this.props.actions.createNote(this.state.content);
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.saveNote(this.state.current_id ,this.state.content);
  }

  onDelete(event) {
    console.log('current_id', this.state.current_id)
    this.props.actions.deleteNote(this.state.current_id);
  }


  render() {
    return (
      <div>
        <NotePad
          notes_list={this.props.notes_list} 
          note={this.state.note} 
          content={this.state.content}
          actions={this.props.actions} 
          onChange={this.onChange}
          onSelect={this.onSelect}
          onAdd={this.onAdd}
          onSave={this.onSave}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
};

Note.propTypes = {
  notes_list: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  note: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  let id = state.notes_list.length;
  let note = {id: id, title: '', content: ''};

  return {
    notes_list: state.notes_list,
    id: note.id,
    note: note,
    content: note.content
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(noteActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Note)

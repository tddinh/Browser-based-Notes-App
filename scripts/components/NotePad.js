import React from 'react';
import ReactDOM from 'react-dom';
import Grid from 'react-bootstrap/lib/Grid.js';
import Row from 'react-bootstrap/lib/Row.js';
import Col from 'react-bootstrap/lib/Col.js';
import Panel from 'react-bootstrap/lib/Panel.js';
import Well from 'react-bootstrap/lib/Well.js';
import Button from 'react-bootstrap/lib/Button.js';
import NoteList from './NoteList.js';
import NoteItem from './NoteItem.js';

const Notepad = ({notes_list, note, actions, content, onChange, onSelect, onAdd, onSave, onDelete}) => {
  return (
    <div className="container">
      <Grid>

        <Panel className="well-top" bsStyle="info">
          Note Pad
        </Panel>

        <Well className="well-content">
          <Row className="show-grid">
            <Col xs={6} md={2}>
              <NoteList
                notes_list={notes_list}
                onSelect={onSelect}
              />
            </Col>

            <Col xs={12} md={10}>
              <NoteItem 
                note={note} 
                actions={actions} 
                content={content} 
                onChange={onChange} 
                onAdd={onAdd}
                onSave={onSave} 
                onDelete={onDelete}
              />
            </Col>
          </Row>
        </Well>

      </Grid>
    </div>
  );
};

export default Notepad;
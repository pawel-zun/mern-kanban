import { connect } from 'react-redux';
import Notes from './Notes';
import * as noteActions from '../Note/NoteActions';
import { updateNoteRequest, deleteNoteRequest, moveWithinLane } from '../Note/NoteActions';

const mapDispatchToProps = {
  ...noteActions,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
  moveWithinLane,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
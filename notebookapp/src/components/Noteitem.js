import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import PropTypes from 'prop-types';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const handleDelete = () => {
    deleteNote(note._id);
    props.showAlert("Deleted Successfully", "success");
  };

  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.name}</h5>
          <p className="card-text">{note.email}</p>
          <i className="fa-solid fa-trash-can mx-2" onClick={handleDelete}></i>
          <i className="fa-solid fa-pen-to-square mx-2" onClick={() => updateNote(note)}></i>
        </div>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  updateNote: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default NoteItem;

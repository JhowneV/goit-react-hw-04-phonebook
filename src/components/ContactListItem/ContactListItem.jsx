import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <li>
      <p>{filteredContact.name}: {filteredContact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

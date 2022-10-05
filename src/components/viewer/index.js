import { useState } from 'react';
import { FolderNavigation, MediaModal, MediaContainer } from '../'

import './styles.css';

const Viewer = ({ images, page, handlePageChange }) => {
  const [selectedMedia, setSelectedMedia] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (image) => {
    setSelectedMedia(image);
    setShowModal(true)
  }

  const handleModalClose = () => {
    setSelectedMedia({});
    setShowModal(false);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <MediaModal handleClose={handleModalClose} selectedMedia={selectedMedia} showModal={showModal} />

      <div className='stamps-container'>
        {images.length &&
          images.map(media => (
            <MediaContainer
              key={media.id}
              media={media}
              clickHandler={handleShowModal}
            />
          ))
        }
      </div>

      <FolderNavigation page={page} handlePageChange={handlePageChange} />
    </div>
  )
}

export default Viewer;

import { X } from 'react-feather';

import './styles.css';

const MediaModal = ({ handleClose, selectedMedia, showModal }) => {
  const showHideClassName = showModal ? "modal display-block" : "modal display-none";
  const isPhoto = ['photo', 'vector', 'illustration'].includes(selectedMedia.type);
  const isVideo = ['film', 'animation'].includes(selectedMedia.type);

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className='modal-header'>
          <button className='modal-close-button' type="button" onClick={handleClose}>
            <X height={45} width={45}/>
          </button>
        </div>

        <div className='modal-body'>
          {isPhoto && (<img  alt={selectedMedia.tags} src={selectedMedia.webformatURL} />)}
          {isVideo && (<video width='480' height='270' src={selectedMedia.videos.large.url} controls />)}
        </div>
      </section>
    </div>
  );
}

export default MediaModal;

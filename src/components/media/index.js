import { Image, Video } from 'react-feather';
import PropTypes from 'prop-types';
import { getDateFromPreviewString } from '../../helpers';

import './styles.css';

const MediaContainer = ({ media, clickHandler }) => {
  const isPhoto = ['photo', 'vector', 'illustration'].includes(media.type);
  const isVideo = ['film', 'animation'].includes(media.type);

  return (
    <div className="media-container" onClick={() => clickHandler(media)}>

      <div className='media-display'>
        {isPhoto && (<img alt={media.tags} width='240' height='135' src={media.previewURL} />)}
        {isVideo && (<video width='240' height='135' src={media.videos.tiny.url} muted />)}
      </div>

      <div className='media-info'>
        <span>
          {isPhoto && (<Image />)}
          {isVideo && (<Video />)}
        </span>
        <span>{`Tags: ${media.tags}`}</span>
        {media.previewURL ? (<span>{`Creation Date: ${getDateFromPreviewString(media.previewURL)}`}</span>) : null}
      </div>
    </div>
  )
}

MediaContainer.propTypes = {
  image: PropTypes.objectOf({
    previewURL: PropTypes.string,
    tags: PropTypes.string,
  }),
};

export default MediaContainer;
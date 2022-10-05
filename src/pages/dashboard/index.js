import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { imageRequester } from '../../helpers';

import './dashboard.css';
import { Folders, NavBar, Viewer } from '../../components';

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [topics, setTopics] = useState(['clouds', 'cars', 'urban', 'birds', 'trucks', 'offices', 'rally', 'flags', 'flowers']);

  const [imageParams, setImageParams] = useState({
    page: 1,
    topic: 'clouds'
  });

  useEffect(() => {
    imageRequester(imageParams).then(data => setImages(data));
  }, [imageParams]);

  const handlePageChange = (newPage) => {
    setImageParams({ ...imageParams, page: newPage });
  }

  const handleTopicAdd = (newTopic) => {
    if (!topics.includes(newTopic)) {
      setTopics([...topics, newTopic]);
    }
    setImageParams({ ...imageParams, topic: newTopic });
  }

  return (
    <div className='container'>
      <NavBar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Folders topics={topics} handleTopicAdd={handleTopicAdd} selectedTopic={imageParams.topic} />
        <Viewer images={images} page={imageParams.page} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  loggedIn: PropTypes.bool, // to occasion  the logout
};

export default Dashboard;
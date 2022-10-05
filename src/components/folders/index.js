import { useState } from 'react';
import { Folder, PlusCircle } from 'react-feather';
import './styles.css';

const Folders = ({ selectedTopic, topics, handleTopicAdd }) => {
  const [topic, setTopic] = useState('');

  const topicChangeHandler = (e) => {
    setTopic(e.target.value);
  }

  const clickHandler = (topic) => {
    handleTopicAdd(topic);
    setTopic('');
  }

  return (
    <div className='folder-container'>
      <div className='folder-add-topic'>
        <input className='folder-add-topic-input' type='text' placeholder='Add Topic' value={topic} onChange={topicChangeHandler} />
        <PlusCircle className='folder-add-topic-icon' height={30} width={30} onClick={() => clickHandler(topic)} />
      </div>

      <div className='folder-topics-container'>
        {topics.map((tpc, idx) => {
          return (
            <div key={idx} className={`folder-topic ${tpc === selectedTopic ? 'folder-active' : ''}`} onClick={() => clickHandler (tpc)}>
              <Folder />
              <span>{tpc}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Folders;
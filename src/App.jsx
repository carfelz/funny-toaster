import { useState } from 'react';
import ToastList from './components/ToastList/ToastList';
import './App.css';

const Toasts = () => {
  const [toasts, setToasts] = useState([]);
  const [duration, setDuration] = useState(5);
  const [position, setPosition] = useState('top-right');
  const [title, setTitle] = useState('Select a title');
  const [icon, setIcon] = useState('fa fa-check');

  const addToast = () => {

    const toast = {
      id: `${title}_${Math.floor(Math.random() * 1000)}`,
      title,
      icon,
      position,
      duration: Number(duration) * 1000,
    };

    setToasts([...toasts, toast]);
  };

  const onClose = (id) => setToasts(toasts.filter(toast => toast.id != id))

  const onPositionChange = (event) => {
    setToasts([]);
    const { value } = event.target;
    setPosition(value);
  }

  return (
    <div className="app">
      <div className="config-panel">
        <h2>Funny Toaster</h2>
        <div className="app-row app-row--group">
          Duration (seconds):
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        <div className="app-row app-row--group">
          Toast title
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="app-row app-row--group">
          Toast Icon
          <input 
            type="text"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>

        <div className="app-row app-row--group">
          Position:
          <select value={position} onChange={onPositionChange}>
            <option value="top-right">Top-right</option>
            <option value="top-left">Top-left</option>
            <option value="bottom-right">Bottom-right</option>
            <option value="bottom-left">Bottom-left</option>
          </select>   

        </div>
        <div className="app-button-container">
          <button className='show-toast-button' onClick={addToast}>Show Toast</button>
        </div>
      </div>
      <div className="toast-container">
      <ToastList data={toasts} position={position} removeToast={onClose} />
      </div>
    </div>
  );
};

export default Toasts;
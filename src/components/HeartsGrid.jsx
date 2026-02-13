import { heartMessages } from '../data/heartMessages';
import HeartItem from './HeartItem';

export function HeartsGrid() {
  return (
    <div className="hearts-grid">
      {heartMessages.map((message, index) => (
        <HeartItem 
          key={index} 
          message={message}
          icon="💕"
        />
      ))}
    </div>
  );
}

export default HeartsGrid;

import MemoryCarousel from '../components/MemoryCarousel';

export function Memories({ onNext }) {
  return (
    <div className="screen-wrapper">
      <div className="memories-content">
        <h1 className="section-title">Memories 🖼️</h1>
        <p className="section-subtitle">Swipe to see more</p>
        
        <MemoryCarousel />
        
        <button 
          className="button button-primary"
          onClick={onNext}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default Memories;


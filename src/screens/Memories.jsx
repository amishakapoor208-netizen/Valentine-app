import MemoryCarousel from '../components/MemoryCarousel';

export function Memories({ onNext }) {
  return (
    <div className="screen memories">
      <div className="screen-content">
        <h1 className="section-title">Our Memories</h1>
        
        <MemoryCarousel />
        
        <p className="memories-text">
          Every moment with you is a treasure I hold close to my heart 💝
        </p>
        
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

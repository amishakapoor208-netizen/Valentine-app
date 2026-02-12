import HeartsGrid from '../components/HeartsGrid';

export function WhyYou({ onNext }) {
  return (
    <div className="screen why-you">
      <div className="screen-content">
        <h1 className="section-title">Why I Love You</h1>
        
        <HeartsGrid />
        
        <button 
          className="button button-primary"
          onClick={onNext}
        >
          Continue to Memories →
        </button>
      </div>
    </div>
  );
}

export default WhyYou;

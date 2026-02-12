import { useState } from 'react';
import ProposalButtons from '../components/ProposalButtons';

export function Proposal({ onYes, onNo }) {
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);

  const handleYes = () => {
    setAnswered(true);
    setAnswer('yes');
    onYes();
  };

  const handleNo = () => {
    setAnswer('no');
  };

  return (
    <div className="screen proposal">
      <div className="screen-content">
        {!answered ? (
          <>
            <h1 className="section-title">
              Will You Be My Valentine? 💝
            </h1>
            
            <p className="proposal-text">
              I want to spend every moment with you, creating beautiful memories...
            </p>
            
            <ProposalButtons 
              onYes={handleYes}
              onNo={handleNo}
            />
          </>
        ) : (
          <div className="proposal-response slideInUp">
            <h2>🎉 You made me the happiest! 🎉</h2>
            <p>Let me show you something special...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Proposal;

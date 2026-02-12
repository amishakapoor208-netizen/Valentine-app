import { useState } from 'react';
import Intro from './screens/Intro';
import WhyYou from './screens/WhyYou';
import Memories from './screens/Memories';
import Proposal from './screens/Proposal';
import Yay from './screens/Yay';
import FinalLetter from './screens/FinalLetter';
import FloatingHearts from './components/FloatingHearts';
import './index.css';

function App() {
  const [screen, setScreen] = useState('intro');

  const handleScreenChange = (newScreen) => {
    setScreen(newScreen);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'intro':
        return <Intro onNext={() => handleScreenChange('whyYou')} />;
      case 'whyYou':
        return <WhyYou onNext={() => handleScreenChange('memories')} />;
      case 'memories':
        return <Memories onNext={() => handleScreenChange('proposal')} />;
      case 'proposal':
        return (
          <Proposal 
            onYes={() => handleScreenChange('yay')}
            onNo={() => handleScreenChange('proposal')}
          />
        );
      case 'yay':
        return <Yay onNext={() => handleScreenChange('finalLetter')} />;
      case 'finalLetter':
        return <FinalLetter />;
      default:
        return <Intro onNext={() => handleScreenChange('whyYou')} />;
    }
  };

  return (
    <div className="app">
      <FloatingHearts />
      <div className="screen-container">
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;

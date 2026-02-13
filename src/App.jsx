import { useState } from 'react';
import Background from './components/Background';
import Intro from './screens/Intro';
import WhyYou from './screens/WhyYou';
import Proposal from './screens/Proposal';
import Yay from './screens/Yay';
import FinalLetter from './screens/FinalLetter';
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
        return <WhyYou onNext={() => handleScreenChange('proposal')} />;
      case 'proposal':
        return (
          <Proposal 
            onYes={() => handleScreenChange('yay')}
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
      <Background>
        <div className="screen-container">
          {renderScreen()}
        </div>
      </Background>
    </div>
  );
}

export default App;


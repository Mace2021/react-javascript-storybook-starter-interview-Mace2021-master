import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Bestsellers } from './components/Bestsellers';
import Chat from './components/Chat';
import ChatStories from './components/Chat.stories';
import component from './components/Bestsellers.stories';
import Bestsellersstories from './components/Bestsellers.stories';

function App() {
  return (
    <div>
      
     <p>testing</p>
    
     <Chat />
     <ChatStories />
     <Bestsellers />
    
     <Basic/>
    </div>
  );
}

export default App;

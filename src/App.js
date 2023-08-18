import React, { useState } from 'react';

import Button from './components/Button';
import './App.css';
import PopupModal from './components/PopupModal';
import ManualCharacterSheetCanvas from './components/CharacterManual';
import AutoCharacterSheetCanvas from './components/CharacterAuto';

function App() {
  const [selectedCanvas, setSelectedCanvas] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const newAutoChar = () => {
    setSelectedCanvas('auto');
    toggleModal();
  };
  const handleButtonClick = () => {
    alert('Button Clicked!');
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rails of Ruin Tools</h1>
        <div className="character-create-buttons">
          <Button
            onClick={() => setSelectedCanvas('manual')}
            text="New Character Sheet (Manual)"
          />

          <Button
            onClick={newAutoChar}
            text="New Character Sheet (Auto)"
          />

          <Button onClick={toggleModal} text="New NPC Card (Manual)" />
          <Button onClick={toggleModal} text="New NPC Card (Auto)" />
        </div>
        <div>
          <Button onClick={handleButtonClick} text="Save" />
          <Button onClick={handleButtonClick} text="Load" />
          <Button onClick={handleButtonClick} text="Reset" />
        </div>
      </header>

      <main className="App-main">
        {showModal && <PopupModal onClose={toggleModal} />}

        {selectedCanvas === 'manual' && <ManualCharacterSheetCanvas />}

        {selectedCanvas === 'auto' && <AutoCharacterSheetCanvas />}
      </main>

      <footer className="App-footer">
        <p>Rails of Ruin is a homemade TTRPG ruleset. Created by Parallax & LordDrugz. This website and character generator was designed and coded by <a href="https://www.christiancassara.com" target="_blank">Parallax</a>.</p>
      </footer>
    </div>
  );
}

export default App;
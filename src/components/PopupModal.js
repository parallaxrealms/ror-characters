import React, { useState, useEffect } from 'react';
import './PopupModal.css';

const PopupModal = ({ onClose }) => {
  const pageContent = [
    {
      modalName: 'Lineage',
      displayType: 'Dropdown',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      dropdowns: ['Passenger', 'Rustborn', 'Freelander'], // Dropdown choices for this page
      descTexts: [
        'You were born on The Rail in a traincart--always moving along the tracks. You are born with your train-legs, the stimuli of existence on The Rail is familiar to you. Exposed to a myriad of cultures and lifestyles, you were born in the new world.',
        'You were born in the harsh, unforgiving wilderness--or atleast whats left of it. Many rustborn are nomadic, but some settle in abandoned carts that are scattered across The Rail. Surrounded by the remnants of human civilization, you survive in the unforgiving and harsh wasteland.',
        'Born on free land--underground artifarms and bunkers—-you are the last bastion of the old world. Agriculture runs in a freelanders blood as farming and self-sustainability are the cornerstones of each settlement. Surviving the old way in these troubled times drives you and your people.'],
      desc2Texts: [
        'Choose 1 Mental or 1 Social stat to increase by +1. Begin with Multi-lingual Boon. Start with Level-1 Passenger ID.',
        'Choose 1 Physical or 1 Social stat to increase by +1. Begin with Radio-immune Boon. Start with Duster Mask.',
        'Choose 1 Mental or 1 Physical stat to increase by +1. Begin with Greenthumb Boon. Start with Vintage Clothing.'],
      modalHeader: 'Choose your Lineage.',
      modalParagraph: 'This is where your character was born, and where they experienced their early childhood.'
    },
    {
      modalName: 'Background',
      displayType: 'Dropdown',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      dropdowns: ['Academic', 'Artist', 'Cartliner', 'Criminal', 'Clergy', 'Conductor', 'Doctor', 'Engineer', 'Espionage', 'Explorer', 'Farmer', 'Freeloader', 'Hauler', 'Hermit', 'Hunter', 'Merchant', 'Mercenary', 'Nomad', 'Politician', 'Scavenger', 'Scientist', 'Security'],
      descTexts: [
        'You were a student, teacher, philosopher, or researcher, and your knowledge spans various topics.',
        'Your creativity flows through your paintings, music, writing, or other artform of your choice, enriching the lives of those around you.',
        'As an entry-level employee for a Megacorp, you performed various duties aboard traincarts.',
        'Youve had run-ins with the law and have learned to survive using questionable methods.',
        'You follow an Old-World deity, one of the Artificial Intelligences such as Omega, or even the Rail itself, guiding your actions.',
        'Your expertise lies in cart-to-cart protocols, making you essential for any moving set of carts.',
        'You were part of the medical field, with experience as a doctor, nurse, or surgeon.',
        'Your technological prowess covershardware engineering, Meshnet access, or even inventing',
        'You have been trained as a spy or scout, and have learned how to remain unseen while gaining information.',
        'Explorer',
        'Farmer',
        'Freeloader',
        'Hauler',
        'Hermit',
        'Hunter',
        'Merchant',
        'Mercenary',
        'Nomad',
        'Politician',
        'Scavenger',
        'Scientist',
        'Security'],
      desc2Texts: [
        'Start with 1d6x2 Credits, Cloth Apparel and a Datapad. Become skilled at the History skill. Gain +1 in any Mental stat.',
        'Artist',
        'Cartliner',
        'Criminal',
        'Clergy',
        'Conductor',
        'Doctor',
        'Engineer',
        'Espionage',
        'Explorer',
        'Farmer',
        'Freeloader',
        'Hauler',
        'Hermit',
        'Hunter',
        'Merchant',
        'Mercenary',
        'Nomad',
        'Politician',
        'Scavenger',
        'Scientist',
        'Security'],
      modalHeader: 'Choose your Background.',
      modalParagraph: 'Your background represents what your does or what your character did in their life before this moment.'
    },
    {
      modalName: 'Stat Distribution',
      displayType: 'Dropdown',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      dropdowns: [
        'Physical / Mental / Social',
        'Physical / Social / Mental',
        'Mental / Physical / Social',
        'Mental / Social / Physical',
        'Social / Mental / Physical',
        'Social / Physical / Mental'],
      descTexts: [
        '"The Guardian"',
        '"The Champion"',
        '"The Sentinel"',
        '"The Mentalist"',
        '"The Seeker"',
        '"The Warden"'],
      desc2Texts: [
        '+6 Physical / +4 Mental / +2 Social',
        '+6 Physical / +4 Social / +2 Mental',
        '+6 Mental / +4 Physical / +2 Social',
        '+6 Mental / +4 Social / +2 Physical',
        '+6 Social / +4 Mental / +2 Physical',
        '+6 Social / +4 Physical / +2 Mental'],
      modalHeader: 'Step 3: Choose your Stats.',
      modalParagraph: 'Choose a primary, secondary and tertiary stat category from the following: Physical, Mental and Social. This will determine the total point pool for each category. The column you choose for primary gets 6 points. The column you choose for secondary gets 4 points. The column you choose for tertiary gets 2 points.'
    },
    {
      modalName: 'Physical',
      displayType: 'StatAllocate',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      Stat1: 'Strength', // Name of Stat1
      Stat2: 'Agility',   // Name of Stat2
      Stat3: 'Hardiness',   // Name of Stat3
      modalHeader: 'Allocate Physical Stats',
      modalParagraph: 'Every stat starts at 0. Allocate the stats based on your Stat Distribution choice.'
    },
    {
      modalName: 'Mental',
      displayType: 'StatAllocate',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      Stat1: 'Intelligence', // Name of Stat1
      Stat2: 'Senses',   // Name of Stat2
      Stat3: 'Willpower',   // Name of Stat3
      modalHeader: 'Allocate Mental Stats',
      modalParagraph: 'Every stat starts at 0. Allocate the stats based on your Stat Distribution choice.'
    },
    {
      modalName: 'Social',
      displayType: 'StatAllocate',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      Stat1: 'Communication', // Name of Stat1
      Stat2: 'Emotions',   // Name of Stat2
      Stat3: 'Appearance',   // Name of Stat3
      modalHeader: 'Allocate Social Stats',
      modalParagraph: 'Every stat starts at 0. Allocate the stats based on your Stat Distribution choice.'
    },
    {
      modalName: 'Boons',
      displayType: 'Dropdown',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      dropdowns: ['Dropdown 1', 'Dropdown 2', 'Dropdown 3'], // Dropdown choices for this page
      descTexts: ['Select Passenger', 'Select Rustborn', 'Select Freelander'],
      desc2Texts: [
        '',
        '',
        '',
        ''],
      modalHeader: 'Choose a max of 3 Boons (Optional)',
      modalParagraph: 'A boon is a PERMANENT positive effect on your character. If you choose a boon, you are required to also choose a bane. You can choose up to 3 (not including the free boon given to you from your Lineage choice).'
    },
    {
      modalName: 'Banes',
      displayType: 'Dropdown',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      dropdowns: ['Dropdown 1', 'Dropdown 2', 'Dropdown 3'], // Dropdown choices for this page
      descTexts: ['Select Passenger', 'Select Rustborn', 'Select Freelander'],
      desc2Texts: [
        '',
        '',
        '',
        ''],
      modalHeader: 'Choose an equal amount of Banes',
      modalParagraph: 'A bane is a PERMANENT negative effect on your character. You must choose the amount of Banes equal to your previous choice of Boons.'
    },
    {
      modalName: 'Name',
      displayType: 'TextInput',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: false,
      dropdowns: ['Dropdown 1', 'Dropdown 2', 'Dropdown 3'], // Dropdown choices for this page
      descTexts: ['Select Passenger', 'Select Rustborn', 'Select Freelander'],
      desc2Texts: [
        '',
        '',
        '',
        ''],
      modalHeader: 'Choose Your Name',
      modalParagraph: 'Decide on a name for this character.'
    },
    {
      modalName: 'Description/Notes',
      displayType: 'TextInput',
      buttonText: 'Close',
      showBackButton: false,
      showFinishButton: true,
      textInput: '', // Initialize empty text input
      modalHeader: 'Write a Description (Optional)',
      modalParagraph: 'Describe your character\'s appearance here or any extra notes for them.'
    }
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const [finishEnabled, setFinishEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState(new Array(pageContent.length).fill(''));
  const [selectedDescText, setSelectedDescText] = useState('');
  const [selectedDesc2Text, setSelectedDesc2Text] = useState('');

  const [statType, setStatType] = useState(0);

  const [statAllocatedValues, setStatAllocatedValues] = useState({});



  // Define the stats object with initial values
  const [stats, setStats] = useState({
    Strength: 0,
    Agility: 0,
    Hardiness: 0,
    Intelligence: 0,
    Senses: 0,
    Willpower: 0,
    Communication: 0,
    Emotions: 0,
    Appearance: 0,
  });

  const currentPageContent = pageContent[currentPage];

  // Define the point totals
  const [physicalPointTotal, setPhysicalPointTotal] = useState(0);
  const [mentalPointTotal, setMentalPointTotal] = useState(0);
  const [socialPointTotal, setSocialPointTotal] = useState(0);




  const handleChoiceSelect = (choiceValue, descText, desc2Text) => {
    console.log(`User's dropdown choice: ${choiceValue}`);
    const updatedSelectedValue = [...selectedValue];
    updatedSelectedValue[currentPage] = choiceValue;
    setSelectedValue(updatedSelectedValue);
    setSelectedDescText(descText);
    setSelectedDesc2Text(desc2Text);

    // Update statType based on choiceValue
    setStatType(getStatTypeFromChoice(choiceValue));
  };


  const handleRadioOptionChange = (option) => {
    const updatedSelectedValue = [...selectedValue];
    updatedSelectedValue[currentPage] = option;
    setSelectedValue(updatedSelectedValue);
    setFinishEnabled(updatedSelectedValue.every(value => value !== ''));
  };

  const handleInputChange = (event) => {
    const updatedSelectedValue = [...selectedValue];
    updatedSelectedValue[currentPage] = event.target.value;
    setSelectedValue(updatedSelectedValue);
    setFinishEnabled(updatedSelectedValue.every(value => value !== ''));
  };

  const getStatTypeFromChoice = (choiceValue) => {
    const choices = [
      'Physical / Mental / Social',
      'Physical / Social / Mental',
      'Mental / Physical / Social',
      'Mental / Social / Physical',
      'Social / Mental / Physical',
      'Social / Physical / Mental'
    ];

    return choices.indexOf(choiceValue);
  };

  const nextPage = () => {
    if (currentPage < pageContent.length - 1) {
      setCurrentPage(currentPage + 1);
      setSelectedDescText('');
      setSelectedDesc2Text('');
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      setSelectedDescText('');
      setSelectedDesc2Text('');
    }
  };



  const renderStatAllocation = () => {
    const statMap = {
      Strength: 'Physical',
      Agility: 'Physical',
      Hardiness: 'Physical',
      Intelligence: 'Mental',
      Senses: 'Mental',
      Willpower: 'Mental',
      Communication: 'Social',
      Emotions: 'Social',
      Appearance: 'Social',
    };

    const firstStatName = currentPageContent.Stat1;
    const secondStatName = currentPageContent.Stat2;
    const thirdStatName = currentPageContent.Stat3;

    return (
      <div className="stat-grid">
        <div className="stat-row">
          <div className="stat-name">
            {firstStatName}
          </div>
          <div className="stat-box">
            <button className="decrease-button" onClick={() => handleStatDecrease(firstStatName)}>-</button>
            <span className={`stat-value ${statMap[firstStatName].toLowerCase()}-stat-value`}>{stats[firstStatName]}</span>
            <button className="increase-button" onClick={() => handleStatIncrease(firstStatName)}>+</button>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-name">
            {secondStatName}
          </div>
          <div className="stat-box">
            <button className="decrease-button" onClick={() => handleStatDecrease(secondStatName)}>-</button>
            <span className={`stat-value ${statMap[secondStatName].toLowerCase()}-stat-value`}>{stats[secondStatName]}</span>
            <button className="increase-button" onClick={() => handleStatIncrease(secondStatName)}>+</button>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-name">
            {thirdStatName}
          </div>
          <div className="stat-box">
            <button className="decrease-button" onClick={() => handleStatDecrease(thirdStatName)}>-</button>
            <span className={`stat-value ${statMap[thirdStatName].toLowerCase()}-stat-value`}>{stats[thirdStatName]}</span>
            <button className="increase-button" onClick={() => handleStatIncrease(thirdStatName)}>+</button>
          </div>
        </div>
      </div>
    );
  };


  const handleStatDecrease = (statName) => {
    if (stats[statName] > 0) {
      const updatedStatValue = stats[statName] - 1;
      setStats((prevState) => ({
        ...prevState,
        [statName]: updatedStatValue,
      }));

      const pointsToReturn = 1;

      if (currentPageContent.modalName === 'Physical') {
        setPhysicalPointTotal((prevTotal) => prevTotal + pointsToReturn);
      } else if (currentPageContent.modalName === 'Mental') {
        setMentalPointTotal((prevTotal) => prevTotal + pointsToReturn);
      } else if (currentPageContent.modalName === 'Social') {
        setSocialPointTotal((prevTotal) => prevTotal + pointsToReturn);
      }

      if (currentPageContent.displayType === 'StatAllocate') {
        const updatedValues = [
          stats[currentPageContent.Stat1],
          stats[currentPageContent.Stat2],
          updatedStatValue === stats[currentPageContent.Stat3] ? updatedStatValue : stats[currentPageContent.Stat3]
        ];
        setStatAllocatedValues((prevValues) => ({
          ...prevValues,
          [currentPage]: updatedValues
        }));
      }
    }
  };


  const handleStatIncrease = (statName) => {
    const pointsToAdd = getCurrentPointsAvailable();

    const firstStatName = currentPageContent.Stat1;
    const secondStatName = currentPageContent.Stat2;
    const thirdStatName = currentPageContent.Stat3;

    const currentTotal = stats[firstStatName] + stats[secondStatName] + stats[thirdStatName];

    if (stats[statName] < 6 && pointsToAdd > 0 && currentTotal < pointsToAdd) {
      const updatedStatValue = stats[statName] + 1;
      setStats((prevState) => ({
        ...prevState,
        [statName]: updatedStatValue,
      }));

      const pointsToRemove = 1;

      if (currentPageContent.modalName === 'Physical') {
        setPhysicalPointTotal((prevTotal) => prevTotal - pointsToRemove); // Adjusted this to subtract points
      } else if (currentPageContent.modalName === 'Mental') {
        setMentalPointTotal((prevTotal) => prevTotal - pointsToRemove); // Adjusted this to subtract points
      } else if (currentPageContent.modalName === 'Social') {
        setSocialPointTotal((prevTotal) => prevTotal - pointsToRemove); // Adjusted this to subtract points
      }

      if (currentPageContent.displayType === 'StatAllocate') {
        const updatedValues = [
          stats[currentPageContent.Stat1],
          updatedStatValue === stats[currentPageContent.Stat2] ? updatedStatValue : stats[currentPageContent.Stat2],
          updatedStatValue === stats[currentPageContent.Stat3] ? updatedStatValue : stats[currentPageContent.Stat3]
        ];
        setStatAllocatedValues((prevValues) => ({
          ...prevValues,
          [currentPage]: updatedValues
        }));
      }
    }
  };


  const getCurrentPointsAvailable = () => {
    if (currentPageContent.modalName === 'Physical') {
      if (statType === 0) return physicalPointTotal;
      if (statType === 1) return 6;
      if (statType === 2) return 4;
      if (statType === 3) return 2;
      if (statType === 4) return 2;
      if (statType === 5) return 4;
    } else if (currentPageContent.modalName === 'Mental') {
      if (statType === 0) return mentalPointTotal;
      if (statType === 1) return 2;
      if (statType === 2) return 6;
      if (statType === 3) return 6;
      if (statType === 4) return 4;
      if (statType === 5) return 2;
    } else if (currentPageContent.modalName === 'Social') {
      if (statType === 0) return socialPointTotal;
      if (statType === 1) return 4;
      if (statType === 2) return 2;
      if (statType === 3) return 4;
      if (statType === 4) return 6;
      if (statType === 5) return 6;
    }
  };

  const handleFinish = () => {
    if (finishEnabled) {
      alert(``);
    }
  };

  useEffect(() => {
    if (currentPageContent.displayType === 'StatAllocate') {
      const initialValues = [
        stats[currentPageContent.Stat1],
        stats[currentPageContent.Stat2],
        stats[currentPageContent.Stat3]
      ];
      setStatAllocatedValues((prevValues) => ({
        ...prevValues,
        [currentPage]: initialValues
      }));
    }
  }, [currentPage, currentPageContent.displayType, currentPageContent.Stat1, currentPageContent.Stat2, currentPageContent.Stat3, stats]);


  const renderInputType = () => {
    if (currentPageContent.displayType === 'Dropdown') {
      return (
        <div>
          <select
            className="choice-dropdown"
            value={selectedValue[currentPage]}
            onChange={(event) => handleChoiceSelect(
              event.target.value,
              currentPageContent.descTexts[event.target.selectedIndex - 1], // -1 to skip the default "Select an option"
              currentPageContent.desc2Texts[event.target.selectedIndex - 1]
            )}
          >
            <option value="">Select an option</option>
            {currentPageContent.dropdowns.map((dropdownChoice, dropdownIndex) => (
              <option key={dropdownIndex} value={dropdownChoice}>
                {dropdownChoice}
              </option>
            ))}
          </select>
        </div>
      );
    } else if (currentPageContent.displayType === 'Radio') {
      return (
        <div className="radio-options">
          {currentPageContent.radioOptions.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="statDistribution"
                value={option}
                checked={selectedValue[currentPage] === option}
                onChange={() => handleRadioOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      );
    } else if (currentPageContent.displayType === 'TextInput') {
      return (
        <textarea
          className="text-input"
          value={selectedValue[currentPage]}
          onChange={handleInputChange}
        />
      );
    } else if (currentPageContent.displayType === 'StatAllocate') {
      return (
        <div className="stat-allocate">
          <div className="stat-point-pool">
            <div className="points-available">
              <h1>Points Available: {getCurrentPointsAvailable()}</h1>
            </div>
          </div>
          {renderStatAllocation()}
        </div>
      );
    }
  };


  return (
    <div className="modal-background">
      <div className="modal-content">
        <h1>{currentPageContent.modalHeader}</h1>
        <h3>{currentPageContent.modalParagraph}</h3>

        <div className="modal-buttons">
          {renderInputType()}
        </div>

        <div className={`selected-value ${finishEnabled ? 'enabled' : 'disabled'}`}>
          <div className="selection-display">You have chosen: <h3>{selectedValue[currentPage]}
            {selectedDescText && (
              <React.Fragment>
                <br />
                <div className="choice-desc">
                  {selectedDescText}
                </div>
                <div className="choice-benefits">
                  {selectedDesc2Text}
                </div>
              </React.Fragment>
            )}</h3></div>
        </div>

        <div className="navigation-buttons">
          {currentPage > 0 && (
            <button className="close-button" onClick={prevPage}>
              Back
            </button>
          )}

          {currentPage < pageContent.length - 1 && (
            (currentPageContent.displayType !== 'StatAllocate' && selectedValue[currentPage]) ||
            currentPageContent.displayType === 'StatAllocate'
          ) && (
              <button className="close-button" onClick={nextPage}>
                Next
              </button>
            )}

        </div>

        {currentPageContent.buttonText && (
          <button className="close-button" onClick={onClose}>
            {currentPageContent.buttonText}
          </button>
        )}

        {currentPageContent.showFinishButton && (
          <button
            className={`finish-button`}
            onClick={handleFinish}
          >
            Finish and Apply
          </button>
        )}
      </div>

      <div className="modal-choices">
        <h2>Current Character:</h2>
        {pageContent.map((page, index) => (
          <p key={index}>
            {page.modalName}: {
              page.displayType === 'StatAllocate' && statAllocatedValues[index]
                ? statAllocatedValues[index].join(' / ')
                : selectedValue[index]
            }
          </p>
        ))}
      </div>

    </div>
  );
};

export default PopupModal;
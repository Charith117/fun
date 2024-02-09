import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [yesButtonCovered, setYesButtonCovered] = useState(false);
  const [buttonText, setButtonText] = useState('No');
  const [yesButtonStyle, setYesButtonStyle] = useState({
    padding: '10px 20px',
    fontSize: '1.5rem'
  });
  const [noButtonStyle, setNoButtonStyle] = useState({
    padding: '10px 20px',
    fontSize: '1.5rem'
  });
  const [mainTextSize, setMainTextSize] = useState('4rem');
  const [stickerSize, setStickerSize] = useState('4rem');

  useEffect(() => {
    const handleResize = () => {
      if (!accepted && window.innerHeight <= document.querySelector('.YesButton').offsetHeight) {
        setYesButtonCovered(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [accepted]);

  const handleYesClick = () => {
    setAccepted(true);
  };

  const handleNoClick = () => {
    const newYesFontSize = `${parseFloat(yesButtonStyle.fontSize) + 2}rem`;
    setYesButtonStyle({
      ...yesButtonStyle,
      fontSize: newYesFontSize
    });

    const newMainTextSize = `${parseFloat(mainTextSize) - 0.2}rem`;
    setMainTextSize(newMainTextSize);

    switch (buttonText) {
      case 'No':
        setButtonText('Are you sure');
        break;
      // Other cases...
      case 'Are you sure':
        setButtonText('Really sure???');
        break;
      case 'Really sure???':
        setButtonText('Are you positive???');
        break;
      case 'Are you positive???':
        setButtonText('Babu please');
        break;
      case 'Babu please':
        setButtonText('Just think about it');
        break;
        case 'Just think about it':
          setButtonText('If you say no ,ill be very sad');
          break;
        case 'If you say no ,ill be very sad':
          setButtonText('Iill be very very sad');
          break;
        case 'Iill be very very sad':
          setButtonText('Iill be very very very sad');
          break;
        case 'Iill be very very very sad':
          setButtonText('Iill be very very very very sad');
          break;
        case 'Iill be very very very very sad':
            setButtonText('Ok fine ,i ll stop asking');
            break;
        case 'Ok fine ,i ll stop asking':
            setButtonText('just kidding,JUST SAY YES');
            break;
        case 'just kidding,JUAT SAY YES':
            setButtonText('Iill be very very very very very sad');
            break;
        case 'Iill be very very very very very sad':
            setButtonText('You Are  breaking my heart :(');
            break;

            
            case 'You Are  breaking my heart :(':
       
        setButtonText('Are you sure..');
        
        break;
        case 'Are you sure..':
        setButtonText('Really sure???!');
        break;
      case 'Really sure???!':
        setButtonText('Are you positive?!?');
        break;
      case 'Are you positive?!?':
        setButtonText('Babu please:(');
        break;
        case 'Babu please:(':
          setButtonText('Ok what ever:(');
          break;
  
      default:
        setButtonText('Ok what ever:(');
        setYesButtonStyle({
          padding: '50vh 100vw',
          fontSize: '15rem'
        });
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Sticker" style={{ fontSize: stickerSize }}>❤️</div>
        {!accepted && !yesButtonCovered && (
          <div>
            <h1 style={{ fontSize: mainTextSize }}>Will you be my Valentine Patner?</h1>
            <button className="YesButton" onClick={handleYesClick} style={{ ...yesButtonStyle }}>Yes</button>
            <button className="NoButton" onClick={handleNoClick} style={{ ...noButtonStyle }}>{buttonText}</button>
          </div>
        )}
        {(accepted || yesButtonCovered) && (
          <h1>Hooray! 🎉 See you on Valentine's Day! <br />❤️❤️😘🥰</h1>
        )}
      </header>
    </div>
  );
}

export default App;

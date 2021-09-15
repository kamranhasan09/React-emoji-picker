
import Picker ,{SKIN_TONE_DARK} from 'emoji-picker-react'
import { useState } from 'react';

function App() {

  const [chosenEmoji,setChosenEmoji] = useState(null);

  const onEmojiClick = (event,emojiObject) =>{
    setChosenEmoji(emojiObject);
  }

  return (
    <>
    <h1 style={{textAlign:'center'}}>Emoji Picker</h1>
    <div style={{textAlign:'center',marginLeft:'510px'}}>
      <Picker onEmojiClick = {onEmojiClick} skinTone={SKIN_TONE_DARK}/>
      {chosenEmoji && <EmojiData chosenEmoji = {chosenEmoji}/>}
    </div>
    </>
  );
}


const EmojiData = ({chosenEmoji}) =>(
  <div style={{textAlign:'center',marginRight:'630px'}}>
    <br></br>
    <br></br>
    <hr></hr>
    <strong>Names:</strong>{chosenEmoji.names.join(', ')}<br/>
    <strong>Symbol:</strong>{chosenEmoji.emoji}<br/>
    
  </div>
  );

export default App;

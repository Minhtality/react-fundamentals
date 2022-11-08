// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className='box box--small' style={{background: 'lightblue'}}>small lightblue box</div>
const mediumBox = <div className='box box--medium' style={{background: 'pink'}}>medium pink box</div>
const largeBox = <div className='box box--large' style={{background: 'orange'}}>large orange box</div>
// extra 1
const Box = ({
  size = 'small',
  backgroundColor,
  ...otherProps
}) => {
  return <div className={`box box--${size}`} style={{backgroundColor, fontStyle: 'italic'}} {...otherProps}/>
}

function App() {
  return (
    <div>
      {/* exercise 5 */}
      {/* {smallBox}
      {mediumBox}
      {largeBox} */}

      {/* extra 5.1 */}
      <Box backgroundColor='lightblue'>small lightblue box</Box>
      <Box backgroundColor='pink' size='medium'>medium pink box</Box>
      <Box backgroundColor='orange' size='large'>large orange box</Box>
    </div>
  )
}

export default App

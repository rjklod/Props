import React from 'react'
import Cart from './Card'
import Data from './Players'

function PlayerList() {
  return (
    <div className='container' style={{ marginTop:'50px', display:'flex', justifyContent: 'space-between'}} >
    {  Data.map((el)=><Cart  data={el} key={el.id}  />)}
    </div>
  )
}
export default PlayerList
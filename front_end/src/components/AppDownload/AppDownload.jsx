import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div>
      <div className='app-download' id='app-download'>
<p>For a Better Experience Download <br />the Teddy Bakez App</p>
<div className="app-download-platform">
<img src={assets.store_apple} alt="" />
<img src={assets.store_google} alt="" />
</div>
      </div>
    </div>
  )
}

export default AppDownload

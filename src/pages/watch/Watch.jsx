import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'

export default function Watch() {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video src="https://videos.pexels.com/video-files/4911896/4911896-uhd_2732_1440_24fps.mp4" className='video' autoPlay progress controls />
    </div>
  )
}

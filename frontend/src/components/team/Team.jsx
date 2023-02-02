
import React from 'react'
import './team.scss'
import '../TeamCard/TeamCard.scss'
import zidane from '../../images/zidane.jpg'
import linkedin from '../../images/linkedin.png'
import medium from '../../images/medium.png'
import facebook from '../../images/facebook@2x.png'
import toni from '../../images/tonikroos.jpg'
import iker from '../../images/ikercasillas.jpg'
import james from '../../images/james.jpg'
import chris from '../../images/christiano.jpg'
import { FiDribbble } from 'react-icons/fi'
import { AiOutlineBehance } from 'react-icons/ai'

const Team = () => {
  return (
    <div className='team'>
        <h1>
          Without <b>Bonding</b> and <b>Co-ordination</b>, every project is a
          failure.
        </h1>
        <h1>
          Look at who makes <b>KICKUP</b> great. ;)
        </h1>
        <div className="lines"></div>
        <div className="member_container">
        <div className="team_card">
        <div className="profile">
        <img src={zidane} alt="" className="photo" />
        </div>   
        <div className="desc">
        <span>
          <h2 className="title">Zidane</h2>
          <p className="position">Leadership & management</p>
        </span>
        <span className="social">
        <img src={linkedin} alt="linkedin" className='icons' />
            <img src={medium} alt="medium" className='icons' />
            <img src={facebook} alt="facebook" className='icons' />
        </span>
      </div>
        </div>
        <div className="team_card">
        <div className="profile">
        <img src={toni} alt="" className="photo" />
        </div>   
        <div className="desc">
        <span>
          <h2 className="title">Toni Kroos</h2>
          <p className="position">Product Developer</p>
        </span>
        <span className="social">
        <img src={linkedin} alt="linkedin" className='icons' />
            <img src={medium} alt="medium" className='icons' />
        </span>
      </div>
        </div>
        <div className="team_card">
        <div className="profile">
        <img src={iker} alt="" className="photo" />
        </div>   
        <div className="desc">
        <span>
          <h2 className="title">Iker Casillas</h2>
          <p className="position">Marketing strategy</p>
        </span>
        <span className="social">
        <img src={medium} alt="medium" className='icons' />
        </span>
      </div>
        </div>
        <div className="team_card">
        <div className="profile">
        <img src={james} alt="" className="photo" />
        </div>   
        <div className="desc">
        <span>
          <h2 className="title">James</h2>
          <p className="position">Product Designer</p>
        </span>
        <span className="social">
            <img src={medium} alt="medium" className='icons' />
            <FiDribbble size={28} style={{color: '#ea4c89'}} />
            <AiOutlineBehance size={28} style={{color: '#fff', background: '#053eff'}} />
        </span>
      </div>
        </div>
        <div className="team_card">
        <div className="profile">
        <img src={chris} alt="" className="photo" />
        </div>   
        <div className="desc">
        <span>
          <h2 className="title">Cristiano</h2>
          <p className="position">Finantial Operations</p>
        </span>
        <span className="social">
        <img src={linkedin} alt="linkedin" className='icons' />
        <img src={facebook} alt="facebook" className='icons' />
        </span>
      </div>
        </div>
        </div>
        <h1>
          and <b>You!</b> ;)
        </h1>
    </div>
  )
}

export default Team
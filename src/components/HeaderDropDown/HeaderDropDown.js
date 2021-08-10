import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HeaderDropDownWrapper = styled.div`
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    left: 0;
    width: 100%;
    z-index: 1;
`

const HeaderDropDownListWrapper = styled.div`
    display: none;
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-weight: normal;
`

const HeaderDropDown = ({ type }) => {
  const droplist = [
    ['Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'],
    ['Previous', 'Upcoming'],
    ['20-21/Winter', '20-21/Summer'],
    ['News', 'Sns', 'Reporters']
  ]
  const link = ['/squadList/', '/match/', '/transfer/', '/news/']
  return (
    <HeaderDropDownWrapper className="content">
      {
        droplist[type].map(item => (
          <Link to={`${link[type]}${item}`} key={item}>
            <HeaderDropDownListWrapper className="link" key={item}>
              {item}
            </HeaderDropDownListWrapper>
          </Link>
        ))
      }
    </HeaderDropDownWrapper>
  )
}

export default HeaderDropDown
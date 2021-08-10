import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const StandingList = () => {
  const { teams } = useSelector(state => state.teams)
  const [mql, setMql] = useState(window.matchMedia('(max-width: 1355px)'))

  useEffect(() => {
    function debounce (timeout = 300) {
      let timer
      return () => {
        clearTimeout(timer)
        timer = setTimeout(() => { setMql(window.matchMedia('(max-width: 1355px)')); console.log("resize") }, timeout)
      }
    }

    const resized = debounce()

    window.addEventListener("resize", resized)
  }, [])

  return (

    <div className="standing-list">
      <div className="standing-header">
        <div>Rank</div>
        <div>Team</div>
        <div>PL</div>
        <div>W</div>
        <div>D</div>
        <div>L</div>
        <div>P</div>
      </div>
      {
        teams.data.map(team => {
          return (
            <div key={team.rank} className="standing-item">
              <div>{team.rank}</div>
              <div className="standing-item-team">{!mql.matches && <img src={team.image} alt="" />}{team.name}</div>
              <div>{team.played}</div>
              <div>{team.win}</div>
              <div>{team.draw}</div>
              <div>{team.lose}</div>
              <div>{team.points}</div>
            </div>
          )

        })}
    </div>
  )
}

export default StandingList
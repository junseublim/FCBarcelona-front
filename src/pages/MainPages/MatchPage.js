import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



const MatchItem = ({ item }) => {
    const { teams } = useSelector(state => state.teams)
    if (!teams.data.length) return null
    return (
        <div className="match-box">
            <div className="match-box-left">
                <div className="match-team">
                    <img src={teams.data.find(team => team._id === item.team).image} alt="" />
                </div>
                <div className="match-info">
                    <div className="team-name">{teams.data.find(team => team._id === item.team).name}</div>
                    <div className="match-detail">
                        <span>{item.date.slice(0, 10)}</span>
                        <span>{item.location}</span>
                        <span>{item.type}</span>
                    </div>
                </div>
            </div>
            {item.isDone &&
                <div className="match-box-right">{item.score}</div>
            }
        </div>
    )
}


const MatchPage = ({ isDone }) => {
    const { match } = useSelector(state => state.match)
    const { teams } = useSelector(state => state.teams)
    const [matchesToShow, setMatchesToShow] = useState([])
    useEffect(() => {
        if (isDone) setMatchesToShow(match.data.filter(item => item.isDone))
        else if (isDone === false) setMatchesToShow(match.data.filter(item => !item.isDone))
        else setMatchesToShow(match.data)

    }, [isDone, match, teams])

    return (
        <div className="match-table">
            {!matchesToShow.length &&
                <div className="no-match-to-show"> No match to show
                </div>}
            {
                matchesToShow.map((item) => (
                    <MatchItem item={item} key={item.date} />
                ))

            }
        </div>

    )
}

export default MatchPage
import React from 'react'
import { Link } from 'react-router-dom'

export default function MatchSmallCard({teamName, match}) {
  const otherTeam = match.team1 === teamName? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  return (
    <div> <Link to={otherTeamRoute}><h3>vs {otherTeam}</h3></Link>
    <p>Match Winner {match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  )
}

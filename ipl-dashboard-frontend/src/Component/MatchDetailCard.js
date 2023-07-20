import React from 'react'
import { Link } from 'react-router-dom';

export default function MatchDetailCard({teamName, match}) {

  const otherTeam = match.team1 === teamName? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  if(!match) return <div>error</div>;
  return (
    <div className='MatchDetailCard
    '>
      <h4>Match Details</h4>
      <Link to={otherTeamRoute}><h1>vs {otherTeam}</h1></Link>
      <h2>{match.date}</h2>
      <h3>at {match.venue}</h3>
      <h3>Match Winner {match.matchWinner} won by {match.resultMargin} {match.result}</h3>

      
    </div>
  )
}

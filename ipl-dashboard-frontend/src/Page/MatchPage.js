import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MatchDetailCard from '../Component/MatchDetailCard'
import { useParams } from 'react-router-dom'

export default function MatchPage() {

  const [matches, setMatches] = useState([]);
  const { year, teamName } = useParams();

  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
        const data = await response.json();
        setMatches(data);
      };
      fetchMatches()
    },[teamName, year]
  );
  return (
    <div className='MatchPage'>
      <h1>MatchPage</h1>
      {matches.map(match => <MatchDetailCard teamName={teamName} match={match}/>)}
    </div>
  )
}

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import TeamTile from '../Component/TeamTile'
import './HomePage.css'

export default function HomePage() {

    const [team, setTeam] = useState([]);

    useEffect(
        () => {
            const fetchTeams = async () => {
                const response = await fetch(`http://localhost:8080/team`);
                const data = await response.json();
                console.log(data);
                setTeam(data);
            };
            fetchTeams(); 
        },[]
    );
  return (
    <div>
        <h1 className='title'>IPL Dashboard</h1>
        <div className='home-page'>
            {team.map(team => <TeamTile key = {team.id}teamName = {team.teamName}/>)}
        </div>
    </div>
  )
}

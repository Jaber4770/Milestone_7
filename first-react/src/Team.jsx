import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    const addPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const removePlayer = () => {
        setTeam(team - 1);
    }

    const teamStyle = {
        border: "2px solid purple",
        padding: "5px",
        borderRadius: "10px",
        margin: "10px"
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}
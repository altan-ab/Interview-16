import React, { useState } from 'react'

function App() {
  const PLAYERS = [
    'Ali',
    'Namık',
    'Eda',
    'Ebru',
    'Suzan',
    'Samet',
    'Engin',
    'Halit',
  ]

  return <FormTeams players={PLAYERS} />
}

const FormTeams = ({ players }) => {
  const [availablePlayers, setAvailablePlayers] = useState(players)
  const [team1, setTeam1] = useState([])
  const [team2, setTeam2] = useState([])
  const [currentTeam, setCurrentTeam] = useState(1)

  const handlePlayerClick = (player) => {
    setAvailablePlayers((prev) => prev.filter((p) => p !== player))

    if (currentTeam === 1) {
      setTeam1((prev) => [...prev, player])
    } else {
      setTeam2((prev) => [...prev, player])
    }
  }

  const handleTeamChange = (team) => {
    setCurrentTeam(team)
  }

  const handleShuffle = () => {
    const shuffledPlayers = [...availablePlayers, ...team1, ...team2].sort(
      () => Math.random() - 0.5
    )
    setAvailablePlayers(shuffledPlayers)
    setTeam1([])
    setTeam2([])
  }

  const handleReset = () => {
    setAvailablePlayers(players)
    setTeam1([])
    setTeam2([])
    setCurrentTeam(1)
  }

  return (
    <div className="text-center p-5">
      {/* Kullanılabilir oyuncular */}
      <div className="mb-5 text-lg font-bold">
        {availablePlayers.map((player) => (
          <button
            key={player}
            onClick={() => handlePlayerClick(player)}
            className="mx-2 px-2 py-1 border border-black rounded hover:bg-gray-200"
          >
            {player}
          </button>
        ))}
      </div>
      {/* Takım seçme butonları */}
      <div className="mb-5">
        <button
          onClick={() => handleTeamChange(1)}
          className={`px-4 py-2 mr-4 border rounded ${
            currentTeam === 1 ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          Şu anda Takım 1 için seçim yapılıyor
        </button>
        <button
          onClick={() => handleTeamChange(2)}
          className={`px-4 py-2 border rounded ${
            currentTeam === 2 ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          Şu anda Takım 2 için seçim yapılıyor
        </button>
      </div>
      {/* Karıştır ve sıfırla butonları */}
      <div className="mb-5">
        <button
          onClick={handleShuffle}
          className="px-4 py-2 mr-4 border border-black rounded hover:bg-gray-200"
        >
          Karıştır
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 border border-black rounded hover:bg-gray-200"
        >
          Sıfırla
        </button>
      </div>
      {/* Takımlar */}
      <div className="flex justify-around mt-5">
        <div>
          <h3 className="font-bold text-xl">Team 1</h3>
          <ul className="list-disc mt-3">
            {team1.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl">Team 2</h3>
          <ul className="list-disc mt-3">
            {team2.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

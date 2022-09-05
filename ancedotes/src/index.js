import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => <h2>{name}</h2>

const Anecdote = ({text, votesCount}) =>
  <div>
    <p>{text}</p>
    <p>has {votesCount} votes</p>
  </div>

const Winner = ({anecdotes, AllVotes}) => {
  const HighestVoteCount = Math.max(...AllVotes)
  const winnerIndex = AllVotes.indexOf(HighestVoteCount)
  const winner = anecdotes[winnerIndex]
  if (HighestVoteCount === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has {HighestVoteCount} votes</p>
    </div>
  )
}

const Button = ({ onClick, text }) =>
  <button onClick={onClick}>
    {text}
  </button>

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [AllVotes, setAllVotes] = useState(Array(6).fill(0))

  const handleVoteClick = () => {
    const newAllVotes = [...AllVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }

  const handleAnecdoteClick = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(arrayIndex)
  }

  return (
    <div>
      <Header name="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votesCount={AllVotes[selected]} />
      <Button onClick={handleVoteClick} text="vote"/>
      <Button onClick={handleAnecdoteClick} text="Next anecdote"/>

      <Header name="Anecdote with most votes" />
      <Winner anecdotes={anecdotes} AllVotes={AllVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'Begining "90" percent of the code/codes accounts for the primary "90" percent of the development period..........The remaining 10 percent of the code or source code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place or a piece of paper. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import './App.css'
import Ideas from '../Ideas/Ideas'
import  { useState } from 'react';

function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]
  const [ideas, setIdeas] = useState(dummyIdeas)

  return (

    <main className='App'>
      <h1> Idea Box</h1>
      <Ideas></Ideas>
    </main>
  )
}

export default App;

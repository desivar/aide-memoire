import React, { useState, ChangeEvent } from 'react';

const Home = () => {
  const [quote, setQuote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState('');

  const handleQuoteChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuote(e.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <div className="container">
      <h2>Welcome to the Aide-Mémoire App!</h2>
      <p>“I will do my Best 2Day”</p>
      <div className="quote-container">
        <h3>Quote of the Day</h3>
        <textarea
          value={quote}
          onChange={handleQuoteChange}
          placeholder="Write your quote of the day"
        />
    
      </div>
      <div className="notes-container">
        <h3>Notes</h3>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Enter a note"
        />
        <button onClick={handleAddNote}>Add Note</button>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

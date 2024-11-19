// App.js
import React from 'react';

// 1. Tickler Component with onClick Event Handler
function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

// 2. Inline Event Handler with Arrow Function
function TicklerInline() {
  return <button onClick={() => console.log("Teehee!")}>Tickle me with an inline handler!</button>;
}

// 3. MultiButton Component with Correct Event Handling
function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

// 4. Handling onChange for Input and Select Elements
function ChangeItUp() {
  function handleChange(event) {
    console.log(`${event.target.name}: ${event.target.value}`);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <select name="filter" onChange={handleChange}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

// 5. Handling Form Submission with onSubmit Event
function Login() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log("Form submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button type="submit">Login</button>
    </form>
  );
}

// 6. Main App component that includes all the examples
function App() {
  return (
    <div>
      <h1>React Event Handlers Examples</h1>
      
      <h2>1. Tickle Me Button (Using onClick)</h2>
      <Tickler />
      
      <h2>2. Tickle Me with Inline Arrow Function</h2>
      <TicklerInline />
      
      <h2>3. MultiButton Example (Event Handler with Arguments)</h2>
      <MultiButton />
      
      <h2>4. Handling Input and Select onChange</h2>
      <ChangeItUp />
      
      <h2>5. Login Form with Submit Handler</h2>
      <Login />
    </div>
  );
}

export default App;

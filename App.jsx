function App() {
  return (
    <div>
      <header className="header">
        <h1>📚 Study Hub</h1>
        <p>Learn, Practice and Grow</p>
      </header>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Planner</a>
        <a href="#">Quiz</a>
      </nav>

      <section className="hero">
        <h2>Welcome to Study Hub</h2>
        <p>Your one-stop platform for learning programming.</p>
      </section>

      <section className="courses">
        <div className="card">
          <h3>HTML</h3>
          <p>Learn webpage structure and design basics.</p>
        </div>

        <div className="card">
          <h3>CSS</h3>
          <p>Make your website beautiful and responsive.</p>
        </div>

        <div className="card">
          <h3>JavaScript</h3>
          <p>Add interactivity and dynamic content.</p>
        </div>
      </section>

      <section className="planner">
        <h2>🗓️ Study Planner</h2>
        <div className="planner-row">
          <input type="text" placeholder="Enter study task" />
          <button>Add</button>
        </div>
      </section>

      <section className="quiz">
        <h2>📝 Quick Quiz</h2>

        <p>What does HTML stand for?</p>

        <label className="option">
          <input type="radio" name="quiz" />
          Hyper Text Markup Language
        </label>

        <label className="option">
          <input type="radio" name="quiz" />
          High Text Machine Language
        </label>

        <button>Submit</button>
      </section>

      <footer>
        © 2026 Study Hub | Created with HTML, CSS & JavaScript
      </footer>
    </div>
  );
}

export default App;
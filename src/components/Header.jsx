function Header() {
  const today = new Date().toDateString();

  return (
    <div className="Header">
      <h2>
        <a href="/">오늘은📆</a>
      </h2>
      <p className="today">{today}</p>
    </div>
  );
}

export default Header;

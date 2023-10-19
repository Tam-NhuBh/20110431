import './Header.css'

function Header() {
  return (
    <header className="wrap">
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/add'>News</a>
            </li>
          </ul>
        </nav>        
    </header>
  );
}
export default Header;

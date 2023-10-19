import './Header.css'

function Header() {
  return (
    <header className="wrapper">
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/add'>New Post</a>
            </li>
          </ul>
        </nav>        
    </header>
  );
}
export default Header;

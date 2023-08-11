const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h2 className="font-bold text-2xl">Arvind M.</h2>

      <nav>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:underline">my work</li>
          <li className="cursor-pointer hover:underline">get in touch</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

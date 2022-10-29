import './HeaderStyles.sass'

const Header = (props) => {
  return (
    <div className='header'>
      <h1 className="logo">tally<span>.app</span></h1>
      <h3 className="tagline">An interactive <span>Score</span> Keeper</h3>
    </div>
  );
};
export default Header;

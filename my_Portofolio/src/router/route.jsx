import { Link } from 'react-router-dom';

const route = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/about">About</Link> |{' '}
    </nav>
  );
};

export default route;
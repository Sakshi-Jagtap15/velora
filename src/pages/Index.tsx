import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to the sample invitation
  return <Navigate to="/invite/riaan-pragya" replace />;
};

export default Index;

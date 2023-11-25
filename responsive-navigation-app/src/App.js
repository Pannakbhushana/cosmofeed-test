import React from 'react';
import AllRoutes from './Router/AllRoutes';
import NavigationMenu from './Components/NavigationMenu';


const App = () => {
  return (
    <div>
     <NavigationMenu/>
     <AllRoutes/>
    </div>
  );
};

export default App;
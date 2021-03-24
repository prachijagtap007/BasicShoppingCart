import React from 'react';
import 'bootswatch/dist/lux/bootstrap.css';
import './shared/Layout.css';

const Layout = ({title, description, children}) => {
    return ( 
        <main className="container">
            {children}
        </main>
     );
}
 
export default Layout;
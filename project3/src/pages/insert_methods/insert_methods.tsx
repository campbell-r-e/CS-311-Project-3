import React from 'react';
import MyForm from './methods';
import ReactDOM from 'react-dom/client';


export default function Render(){
    React.useEffect(() => {
        const rootElement = document.getElementById('root');
        if(rootElement){
        const root = ReactDOM.createRoot(rootElement);
        
        root.render(<MyForm />);

        }
      }, []);
    return(

        <div id="root"></div>
    )
}


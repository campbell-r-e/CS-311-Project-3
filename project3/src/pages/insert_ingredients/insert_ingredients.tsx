import React from 'react';
import MyForm from './MyForm';
import ReactDOM from 'react-dom/client';
import { motion } from "framer-motion"


export default function Render(){
    React.useEffect(() => {
        const rootElement = document.getElementById('root');
        if(rootElement){
        const root = ReactDOM.createRoot(rootElement);
        
        root.render(<MyForm />);

        }
      }, []);
    return(
        <div>
        
        <div id="root">
            


  
        </div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
      >
        Animated Button
      </motion.button>

        </div>
    )
}


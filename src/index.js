import React from 'react';
import ReactDOM from 'react-dom/client';
// import MyFooter from './Footer';

// App para manejo basico de Tasks (todos los componentes en subdir aislado). Solo se cambia aqui la llamada al principal
import Tasks from './appTasks/AppFunction';
ReactDOM.createRoot(document.getElementById('app')).render(<Tasks />);
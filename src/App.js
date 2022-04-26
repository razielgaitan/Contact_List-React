import './App.css';
import ContactList from './components/pure/ContactList';

function App() {
  return (
    <div style={ {backgroundColor: '#22242e', color: '#ffff'} } >
      <div className='container'>
        <ContactList/>
      </div>
    </div>
    
  );
}

export default App;

import './App.css';
import Pokemon from './Components/Pokemon';
import EmailIcon from '@mui/icons-material/Email';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';

const Array = [
    {name: 'Ash', expertise: "FrontEnd Developer", experience: "3 year"},
    {name: 'Mark', expertise: "BackEnd Developer", experience: "3 year"},
    {name: 'Sarah', expertise: "DevOps Developer", experience: "3 year"},
];

function App() {
    return (
        <>
            <EmailIcon/>
            <AppSettingsAltIcon/>
        </>
    );
}

export default App;
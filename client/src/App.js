import EventsState from './context/EventsState';
import AuthState from './context/AuthState';
import KorisnikState from './context/KorisnikState';
import VraboteniState from './context/VraboteniState';
import Permisions from './components/layout/Permisions';
import './App.css';

const App = () => {
    return (
        <EventsState>
            <AuthState>
                <KorisnikState>
                    <VraboteniState>
                        <Permisions />
                    </VraboteniState>
                </KorisnikState>
            </AuthState>
        </EventsState>
    );
};

export default App;

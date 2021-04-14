import AuthState from './context/AuthState';
import KorisnikState from './context/KorisnikState';
import VraboteniState from './context/VraboteniState';
import EventsState from './context/EventsState';
import Permisions from './components/layout/Permisions';
import './App.css';

const App = () => {
    return (
        <AuthState>
            <KorisnikState>
                <VraboteniState>
                    <EventsState>
                        <Permisions />
                    </EventsState>
                </VraboteniState>
            </KorisnikState>
        </AuthState>
    );
};

export default App;

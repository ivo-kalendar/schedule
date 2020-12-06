import AuthState from './context/AuthState';
import KorisnikState from './context/KorisnikState';
import VraboteniState from './context/VraboteniState';
import Permisions from './components/layout/Permisions';
import './App.css';

const App = () => {
    return (
        <AuthState>
            <KorisnikState>
                <VraboteniState>
                    <Permisions />
                </VraboteniState>
            </KorisnikState>
        </AuthState>
    );
};

export default App;

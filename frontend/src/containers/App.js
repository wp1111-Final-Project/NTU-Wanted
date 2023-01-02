import { ResponsiveAppBar } from '../components/Navbar/Navbar'
import InfoForm from '../components/CreatePost/InfoForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import ExpPage from '../components/ExpPage/ExpPage';
import MyExp from '../components/MyExp/MyExp';
import MyLikedListPage from '../components/MyLikedList/MyLikedList'

function App() {

    return (
        <Router>
            <ResponsiveAppBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/newpost" element={<InfoForm />} />
                <Route path="/experiment/:id" element={<ExpPage />} />
                <Route path='/myexperiment' element={<MyExp />} />
                <Route path='/mylikedlist' element={<MyLikedListPage />} />
            </Routes>
        </Router>
    );
}

export default App;

import { ResponsiveAppBar } from '../components/Navbar/Navbar'
import InfoForm from '../components/CreatePost/InfoForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';
import ExpPage from '../components/ExpPage/ExpPage';
import MyExp from '../components/MyExp/MyExp';
import MyLikedListPage from '../components/MyLikedList/MyLikedList'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import ContactUs from '../components/ContactUs';
import { useState } from 'react';

function App() {

    const [open, setOpen] = useState(false);

    return (
        <Router>
            <AppBar position="static" sx={{ mb: '10px', height: '60px', backgroundColor: '#FFFFFF', border: 'none', 'boxShadow': 'none' }}>
                <Container maxWidth="xl" sx={{ height: '60px', backgroundColor: '#FFFFFF', border: 'none' }}>
                </Container>
            </AppBar>
            <ResponsiveAppBar open={open} setOpen={setOpen} />
            <Routes>
                <Route path="/" element={<HomePage open={open} setOpen={setOpen} />} />
                <Route path="/newpost" element={<InfoForm />} />
                <Route path="/experiment/:id" element={<ExpPage />} />
                <Route path='/myexperiment' element={<MyExp />} />
                <Route path='/mylikedlist' element={<MyLikedListPage />} />
                <Route path='/contactus' element={<ContactUs />} />
            </Routes>
        </Router>
    );
}

export default App;

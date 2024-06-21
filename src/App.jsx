import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./pages/homePage/Home.jsx";
import RequestExercises from "./pages/requestExercisesPage/RequestExercises.jsx";
import NewPost from "./pages/newPostPage/NewPost.jsx";
import BlogOverview from "./pages/blogOverviewPage/BlogOverview.jsx";
import BlogDetail from "./pages/blogDetailPage/BlogDetail.jsx";
import NotFound from "./pages/notFoundPage/NotFound.jsx";
import Footer from "./components/footer/Footer.jsx";
import './App.css';


function App() {
    return (
        <>
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/posts" element={<BlogOverview/>}/>
                    <Route path="/new-post" element={<NewPost/>}/>
                    <Route path="/posts/:id" element={<BlogDetail/>}/>
                    <Route path="/request-exercises" element={<RequestExercises/>}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </main>
            <Footer text="Blogventure &copy; 2024 - ontwikkeld voor NOVI Hogeschool"/>
        </>
    );
}

export default App

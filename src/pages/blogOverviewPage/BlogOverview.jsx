import {useEffect, useState} from 'react';
import axios from 'axios';
import BlogItem from "../../components/blogItem/BlogItem.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";
import './BlogOverview.css';


function BlogOverview() {
    const [posts, setPosts] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchAllPosts() {
            toggleError(false);
            toggleLoading(true);

            try {
                const response = await axios.get("http://localhost:3000/posts");
                console.log(response.data);
                setPosts(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }

        fetchAllPosts();
        }, []);


    return (
        <>
            <header className="header--blog-overview outer-content-container">
                {posts.length > 0 ? <h1>Bekijk alle {posts.length} posts op het platform</h1> : <h1>Posts ophalen</h1>}
            </header>
            <section className="outer-content-container">
                <div className="blog-overview-container">
                    {posts.length > 0 ?
                        <div className="blog-items">
                            {posts.map((post) => {
                                return (
                                    <BlogItem
                                        key={post.id}
                                        title={post.title}
                                        author={post.author}
                                        comments={post.comments}
                                        shares={post.shares}
                                    />
                                );
                            })}
                        </div> : null
                    }
                    {loading && <h2>Loading...</h2>}
                    {error && <ErrorMessage message="Het ophalen van de posts is niet gelukt. 😿 Laad de pagina opnieuw." />}
                </div>
            </section>
        </>
    );
}

export default BlogOverview
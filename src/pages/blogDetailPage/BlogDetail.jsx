import {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaretLeft, Clock } from "@phosphor-icons/react";
import Button from "../../components/button/Button.jsx";
import ErrorMessage from "../../components/errorMessage/ErrorMessage.jsx";
import formatDateString from "../../helpers/formatDateString.js";
import './BlogDetail.css';


function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [postDetails, setPostDetails] = useState();
    const [deleteMessage, setDeleteMessage] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchPostDetails() {
            toggleError(false);
            toggleLoading(true);

            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                console.log(response.data);
                setPostDetails(response.data);
            } catch (e) {
                console.error(e);
                toggleError(true);
            } finally {
                toggleLoading(false);
            }
        }

        fetchPostDetails();
    }, []);

    async function deletePost() {
        try {
            const response = await axios.delete(`http://localhost:3000/posts/${id}`);
            console.log(response.data);
            setDeleteMessage("De post is succesvol verwijderd!🎉");

            setTimeout(() => { navigate("/posts") }, 1000);

        } catch (e) {
            console.error(e);
            setDeleteMessage("Het verwijderen is niet gelukt.😿 Probeer het opnieuw.");
        }
    }

    return (
        <section className="outer-content-container">
            <div className="blog-detail--container">
                {postDetails ?
                    <>
                        <h1>{postDetails.title}</h1>
                        <h2>{postDetails.subtitle}</h2>
                        <p><em>Geschreven door {postDetails.author} op {formatDateString(postDetails.created)}</em></p>
                        <span className="blog-detail--read-time">
                        <Clock color="#50535C" size={18} />
                        <p>{postDetails.readTime} minuten lezen</p>
                        </span>
                        <p className="blog-detail--content">{postDetails.content}</p>
                        <p><em>{postDetails.comments} reacties - {postDetails.shares} keer gedeeld</em></p>
                    </> : null
                }
                {loading && <h2>Loading...</h2>}
                {error && <ErrorMessage message="Het ophalen van de post is niet gelukt. 😿 Laad de pagina opnieuw." />}
                <Link to="/posts" className="blog-detail--back-link">
                    <CaretLeft color="#38E991" size={24} />
                    <p>Terug naar de overzichtspagina</p>
                </Link>
                <Button type="button" clickHandler={deletePost} className="button delete-button" text="Post verwijderen" disabled={loading} />
                {deleteMessage && <h2>{deleteMessage}</h2>}
            </div>
        </section>
    );
}

export default BlogDetail;
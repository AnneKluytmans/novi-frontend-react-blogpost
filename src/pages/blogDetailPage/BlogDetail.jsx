import { Link, useParams } from "react-router-dom";
import { CaretLeft, Clock } from "@phosphor-icons/react";
import blogs from '../../constants/data.json';
import formatDateString from "../../helpers/formatDateString.js";
import './BlogDetail.css';


function BlogDetail() {
    const { id } = useParams();

    const { title, subtitle, content, created, author, comments, shares, readTime } = blogs.find((blog) => {
        return blog.id.toString() === id;
    });

    return (
        <section className="outer-content-container">
            <div className="blog-detail--container">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p><em>Geschreven door {author} op {formatDateString(created)}</em></p>
                <span className="blog-detail--read-time">
                    <Clock color="#50535C" size={18} />
                    <p>{readTime} minuten lezen</p>
                </span>
                <p className="blog-detail--content">{content}</p>
                <p><em>{comments} reacties - {shares} keer gedeeld</em></p>
                <Link to="/blog-overview" className="blog-detail--back-link">
                    <CaretLeft color="#38E991" size={24} />
                    <p>Terug naar de overzichtspagina</p>
                </Link>
            </div>
        </section>
    );
}

export default BlogDetail;
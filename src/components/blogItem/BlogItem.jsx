import './BlogItem.css'

function BlogItem( { id, title, author, comments, shares }) {
    return (
        <article key={id} className="blog-item">
            <h3>{title}</h3>
            <h4>({author})</h4>
            <p>{comments} reacties - {shares} keer gedeeld</p>
        </article>
    );
}

export default BlogItem;
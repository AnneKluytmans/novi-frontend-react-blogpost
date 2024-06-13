import blogs from '../../constants/data.json'
import './BlogOverview.css';
import BlogItem from "../../components/blogItem/BlogItem.jsx";

function BlogOverview() {
    const amountOfBlogs = blogs.length

    return (
        <>
            <header className="header--blog-overview outer-content-container">
                <h1>Bekijk alle {amountOfBlogs} posts op het platform</h1>
            </header>
            <section className="outer-content-container">
                <div className="blog-overview-container">
                    {blogs.map((blog) => {
                         return (
                             <BlogItem
                                 key={blog.id}
                                 title={blog.title}
                                 author={blog.author}
                                 comments={blog.comments}
                                 shares={blog.shares}
                             />
                       );
                      })}
                </div>
            </section>
        </>
    );
}

export default BlogOverview
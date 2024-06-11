import data from '../../constants/data.json'
import './BlogOverview.css';

function BlogOverview() {
    const amountOfBlogs = data.length
    const blogs = data

    return (
        <>
            <header className="header--blog-overview outer-content-container">
                <h1>Bekijk alle {amountOfBlogs} posts op het platform</h1>
            </header>
            <section className="outer-content-container">
                <div className="blog-overview-container">
                    {blogs.map((blog) => {
                         return (
                              <article key={blog.id} className="blog-item">
                                  <h3>{blog.title}</h3>
                                  <h4>({blog.author})</h4>
                                  <p>{blog.comments} reacties - {blog.shares} keer gedeeld</p>
                              </article>
                       );
                      })}
                </div>
            </section>
        </>
    );
}

export default BlogOverview
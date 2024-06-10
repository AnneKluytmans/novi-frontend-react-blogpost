import { useParams } from "react-router-dom";
import './BlogDetail.css';

function BlogDetail() {
    const { id } = useParams();
    return (
        <p>id: {id}</p>
    );
}

export default BlogDetail;
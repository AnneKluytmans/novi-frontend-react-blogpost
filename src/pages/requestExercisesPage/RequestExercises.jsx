import Button from "../../components/button/Button.jsx";
import axios from "axios";

function RequestExercises() {
    const postId = 6
    const deletePostId = 17
    const updatePostId = 1

    async function fetchAllPosts() {
        try {
            const response = await axios.get("http://localhost:3000/posts");
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchPost() {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${postId}`);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function createPost() {
        try {
            const response = await axios.post("http://localhost:3000/posts", {
                "title": "Wat gebruiker heeft ingevuld",
                "subtitle": "Wat gebruiker heeft ingevuld",
                "content": "Wat gebruiker heeft ingevuld, in dit geval minder dan 100 woorden",
                "author": "Voornaam achternaam",
                "created": "2023-09-21T09:30:00Z",
                "readTime": 1,
                "comments": 0,
                "shares": 0
            });
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function deletePost() {
        try {
            const response = await axios.delete(`http://localhost:3000/posts/${deletePostId}`);
            console.log(response.data);
            console.log("De post is succesvol verwijderd!🎉");
        } catch (e) {
            console.error(e);
            console.log("Het verwijderen is niet gelukt.😿 Check de post id.");
        }
    }

    async function updatePost() {
        try {
            const originalResponse = await axios.get(`http://localhost:3000/posts/${updatePostId}`);
            const postData = originalResponse.data;

            const response = await axios.put(`http://localhost:3000/posts/${updatePostId}`, {
                ...postData,
                subtitle: "Nieuwe geweldige subtitel"
            });
            console.log(response.data);
            console.log("De subtitel is succesvol aangepast!🎉");
        } catch (e) {
            console.error(e);
            console.log("Het aanpassen van de subtitel is mislukt.😿 Probeer het opnieuw.");
        }
    }

    return(
        <>
            <div className="outer-content-container">
                <Button type="button" clickHandler={fetchAllPosts} className="button" text="Haal alle posts op" />
                <Button type="button" clickHandler={fetchPost} className="button" text="Haal specifieke post op" />
                <Button type="button" clickHandler={createPost} className="button" text="Maak nieuwe post" />
                <Button type="button" clickHandler={deletePost} className="button" text="Verwijder post" />
                <Button type="button" clickHandler={updatePost} className="button" text="Wijzig post" />
            </div>
        </>
    );
}

export default RequestExercises;
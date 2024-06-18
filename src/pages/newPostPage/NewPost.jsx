import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import calculateReadTime from "../../helpers/calculateReadTime.js";
import Button from "../../components/button/Button.jsx";
import InputField from "../../components/inputField/InputField.jsx";
import './NewPost.css';


function NewPost() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const navigate = useNavigate();

    function handleFormSubmit(data) {
        console.log({
            ...data,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(data.content),
        });

        console.log('De nieuwe post is succesvol aangemaakt! 🌈');
        navigate('/blog-overview');
    }

    return (
        <section className="outer-content-container">
            <form className="new-post--container" onSubmit={handleSubmit(handleFormSubmit)}>
                <h1>Nieuwe Post toevoegen</h1>
                <InputField
                    id="title-field"
                    type="text"
                    name="title"
                    label="Titel"
                    register={register}
                    validation={{
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                    }}
                    error={errors.title}
                />
                <InputField
                    id="subtitle-field"
                    type="text"
                    name="subtitle"
                    label="Subtitel"
                    register={register}
                    validation={{
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                    }}
                    error={errors.subtitle}
                />
                <InputField
                    id="author-field"
                    type="text"
                    name="author"
                    label="Naam en achternaam"
                    register={register}
                    validation={{
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                    }}
                    error={errors.author}
                />
                <div className="input-field">
                    <label htmlFor="content-field">Blogpost</label>
                    <textarea
                        id="content-field"
                        {...register("content", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                            minLength: {
                                value: 300,
                                message: 'De post moet minstens 300 karakters bevatten',
                            },
                            maxLength: {
                                value: 2000,
                                message: 'De post mag maximaal 2000 karakters bevatten',
                            },
                        })}
                        cols="30"
                        rows="10">
                    </textarea>
                    {errors.content && <p className="form-error-message">{errors.content.message}</p>}
                </div>
                <Button type="submit" text="Post aanmaken" className="button"/>
            </form>
        </section>
);
}

export default NewPost;
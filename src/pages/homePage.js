import './homepage.css';

export default function HomePage({email})
{
    return(
        <div className="home">
            <h1>Home {email}</h1>
        </div>
    );
}
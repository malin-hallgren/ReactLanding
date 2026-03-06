import "./LargeCard.css";

export default function LargeCard({ title, subtitle, text, imgSrc }) {
    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className="large-card">
                <p>{text}</p>
                {imgSrc && <img id="profile-picture" src={imgSrc} />}
            </div>
        </>
    );
}
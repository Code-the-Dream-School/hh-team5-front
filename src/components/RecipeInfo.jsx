
const RecipeInfo = ({ name, time }) => {
    return (
        <div className="infoBox">
            <h3>{name}</h3>
            <p>{time}</p>
        </div>
    );
};

export default RecipeInfo;
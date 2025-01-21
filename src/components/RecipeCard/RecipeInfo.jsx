
const RecipeInfo = ({ name, time }) => {
    return (
        <div className="infoBox">
            <h3 className={`w-full`}>{name}</h3>
            <p>{time}</p>
        </div>
    );
};

export default RecipeInfo;
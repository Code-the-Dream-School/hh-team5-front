
const RecipeInfo = ({ name, time }) => {
    return (
        <div className="relative bg-white text-left p-2 px-4 mt-[-2rem] rounded-xl z-30">
            <h3 className="font-heading text-l">{name}</h3>
            <p className="font-body">{time}</p>
        </div>
    );
};

export default RecipeInfo;
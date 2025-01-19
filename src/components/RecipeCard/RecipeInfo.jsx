
const RecipeInfo = ({ name, time }) => {
    return (
        <div className="relative bg-white text-left p-2 px-4 mt-[-2rem] rounded-xl z-30 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            <h3 className="font-heading text-l">{name}</h3>
            <p className="font-body">{time}</p>
        </div>
    );
};

export default RecipeInfo;
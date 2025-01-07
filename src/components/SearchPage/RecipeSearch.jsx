import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const RecipeSearch = () => {
    return (
        <form>
            <label className={`text-xl`}>Search for Ingredients</label>
            <br />
            <span className={` focus-within:ring-2 focus-within:ring-blue-400 rounded-md focus-within:shadow-md focus-within:shadow-blue-400`}>
                <input
                    className={` border-none focus:ring-0 outline-none rounded-l-md`}

                    id='ingredients'
                    type='text'
                    autoFocus
                />

                <button className={`bg-white rounded-r-md px-2`}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
            </span>
        </form>
    )
}

export default RecipeSearch
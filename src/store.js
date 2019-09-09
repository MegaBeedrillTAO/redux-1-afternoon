import {createStore} from 'redux';

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_FIRST = 'UPDATE_FIRST';
export const UPDATE_LAST = 'UPDATE_LAST';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS';
export const UPDATE_RECIPES = 'UPDATE_RECIPES';


const initState = {
    name: '',
    category: '',
    first_name: '',
    last_name: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

function reducer(state=initState, action){
    const { type, payload } = action;
    switch(type){
        case UPDATE_NAME:
            return{
                ...state,
                name: payload
            }
        case UPDATE_CATEGORY:
            return{
                ...state,
                category: payload
            }
        case UPDATE_FIRST:
            return{
                ...state,
                first_name: payload
            }
        case UPDATE_LAST:
            return{
                ...state,
                last_name: payload
            }
        case UPDATE_INGREDIENTS:
                const newIngredients = [...state.ingredients, payload];
                return { ...state, ingredients: newIngredients }; 
        case UPDATE_INSTRUCTIONS:
                const newInstructions = [...state.instructions, payload];
                return { ...state, instructions: newInstructions }; 
        case UPDATE_RECIPES:
                const {
                    name,
                    category,
                    first_name,
                    last_name,
                    ingredients,
                    instructions
                  } = state;
                  const recipe = {
                    name,
                    category,
                    first_name,
                    last_name,
                    ingredients,
                    instructions
                  };
                  const newRecipes = [...state.recipes, recipe];
                  return { ...state, recipes: newRecipes };
                    
        default: 
        return state;

    }
}
export default createStore(reducer);
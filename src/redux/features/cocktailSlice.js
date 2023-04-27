import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//  createAsyncTHunk(actionName, source where we are going to fetch our data)
export const fetchCocktails = createAsyncThunk('cocktails/fetchCocktails', async () => {
    return (
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s').then(
            (res) => res.json()
        )
    )
})

const cocktailSlice = createSlice({
    name: 'cocktails', // slice name
    initialState: {
        loading: false,
        cocktails: [],
        error: null,
        cocktail: [],

    },
    reducers: {
        [fetchCocktails.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks;
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default cocktailSlice.reducer

import * as CategoryAPI from '../Util/CategoryAPI';

export const FETCH_CATEGORIES_BEGIN = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';



export const fetchCategoriesSuccess = (categories) => {

  return ({
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  });
};




export const fetchCategories = () => dispatch => {
   CategoryAPI.getAll()
    .then((json) => dispatch(fetchCategoriesSuccess(json.categories)))
}


import * as CategoryAPI from '../Util/CategoryAPI';

export const FETCH_CATEGORIES_BEGIN = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesBegin = () => {
  type: FETCH_CATEGORIES_BEGIN
};

export const fetchCategoriesSuccess = (categories) => {

  return ({
    type: FETCH_CATEGORIES_SUCCESS,
    categories
  });
};

export const  fetchCategoriesFailure = (error) => {
  type: FETCH_CATEGORIES_FAILURE,
  error
};

export const  fetchCategories = () => dispatch => {

  return CategoryAPI.getAll()
    .then((categories) => {

      dispatch(fetchCategoriesSuccess(categories))
      
    })
    .catch(error => dispatch(fetchCategoriesFailure))
}

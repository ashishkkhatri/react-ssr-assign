export const FETCH_LAUNCHES = 'fetch_launches';
export const fetchLaunches = () => async (dispatch, getState, api) => {
    const res = await api.get('/v3/launches?limit=1');
    dispatch({
        type: FETCH_LAUNCHES,
        payload: res
    });
};

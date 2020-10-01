export const FETCH_LAUNCHES = 'fetch_launches';
export const fetchLaunches = params => async (dispatch, getState, api) => {
    const res = await api.get(`/v3/launches?limit=100${params}`);
    dispatch({
        type: FETCH_LAUNCHES,
        payload: res
    });
};

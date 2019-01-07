import { SHOW_SWAL, HIDE_SWAL } from './type';

function parseArgument(f1, f2, f3) {
    if (typeof f1 === 'string') {
        const payload = {
            title: f1,
        };
        if (f2) payload.text = f2;
        if (f3) payload.type = f3;
        return payload;
    }
    return f1[0];
}

export const openAlert = (...args) => dispatch => {
    const payload = parseArgument(args);
    dispatch({
        type: SHOW_SWAL,
        payload
    });
}

export const closeAlert = () => dispatch => {
    dispatch({
        type: HIDE_SWAL,
    });
}
import { SCROLLED_DOWN, SCROLLED_UP } from './types';

// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case SCROLLED_DOWN:
            return {
                scrollDown: '-scrolled-down',
            };
        case SCROLLED_UP:
            return {
                scrollDown: '',
            };
        default:
            return state;
    }
};

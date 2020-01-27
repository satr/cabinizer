export default function reducer(state={
    open: false
}, action: any) {
    return action.type === "MENU_STATE"
        ? {...state, open: action.payload}
        : state;
}
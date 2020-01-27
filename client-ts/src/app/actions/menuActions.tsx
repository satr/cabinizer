export function openMenu() {
    return {
        type: "MENU_STATE",
        payload: {
            open: false
        }
    }
}
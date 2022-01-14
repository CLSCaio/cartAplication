export const types = {
  SET_OPEN_MENU: 'SET_OPEN_MENU'
}

const openMenu = {
  openMenu: (openMenu: string) => ({
    type: types.SET_OPEN_MENU,
    payload: openMenu
  })
}

export default openMenu
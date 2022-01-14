import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ImUsers, ImMenu} from 'react-icons/im'

import SwitchDarkMode from '../../../components/SwitchDarkMode'
import darkMode from './services/darkMode'

import { MenuBarDiv, MenuBarDivPrincipal } from './styles'

import { actions } from '../../../store'

const MenuBar = (props: any): JSX.Element => {

  const openOrClosed = () => {
    const test = props.height === '50px' ? '120px' : '50px'
    return props.openMenu(test)
  }

  return (
    <MenuBarDivPrincipal >
      <MenuBarDiv>
        <div className="imMenu" >
          <ImMenu onClick={() => openOrClosed()}/>
        </div>
        
        <div className="imUsers">
          <ImUsers />
        </div>
 
        <h1> 
          {props.nameLogo}
        </h1>

        <SwitchDarkMode onClick={() => darkMode()}/>

      </MenuBarDiv>
    </MenuBarDivPrincipal>
  )
}

const mapStateToProps = (state: any) => ({
  height: state.menu.height,
  nameLogo: state.nameLogo.nameLogo
})

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  actions.openMenu,
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar)
import React from 'react'
import { connect } from 'react-redux'

import { HeaderDiv, HeaderDivBackground } from './styles'

import MenuBar from './MenuBar'
import MenuOpc from './MenuOpc'
 
const Header = (props: any): JSX.Element => {
 

  return (
    <HeaderDivBackground >
      <HeaderDiv  style={{height: props.height}}>
        <MenuBar/>
        <MenuOpc/>
      </HeaderDiv>
    </HeaderDivBackground>
  )
}

const mapStateToProps = (state: any) => ({
  height: state.menu.height
})

export default connect(mapStateToProps, null)(Header)


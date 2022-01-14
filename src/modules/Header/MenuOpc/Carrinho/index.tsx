import React from 'react'
import { connect } from 'react-redux'
import Link from '../../../../components/Link'
import { BsCart4 } from 'react-icons/bs'

import { DivUlLi } from './styles' 

const Carrinho = (props: any): JSX.Element => {

  return (
    <DivUlLi >
      <ul>
        <Link href='/Carrinho' >
          <li >
            <BsCart4 />
            Carrinho - {props.cartAmount} item(s)
          </li>
        </Link>
      </ul>
    </DivUlLi>
  ) 
}

const mapStateToProps = (state: any) => ({
  cartAmount: state.cart.cartAmount
})

export default connect(mapStateToProps, null)(Carrinho)
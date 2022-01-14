import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Card from '../components/Card'

import { CardContainer } from './styles'

import { actions } from '../store'

const Home = (props: any) => {

  async function asyncProducts() {
    await props.setProductList()
  }

  const submite = (e: any) => {
    props.addToCart(e)
    props.incrementCartAmount()
  }

  useEffect(() => {
    props.setNameLogo('HomePage')
    asyncProducts()
    
  }, [])

  return (
    <>
      <h1> Lista de produtos </h1>
      <CardContainer>
      {props.productList.data && 
        props.productList.data.map((items: any) => {
          const valuesNumber = Number(items.price)
          const priceBR = valuesNumber.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return (
          <Card
            id={items.id}
            title={items.name}
            img={items.img}
            price={priceBR}
            addToCart={(e: any) => submite(e)}
          />
        )})}
      </CardContainer> 
    </>
  )
}

const mapStateToProps = (state: any) => ({
  productList: state.productList.list
})

const mapDispatchToProps = (dispatch: any) => 
bindActionCreators({
  addToCart: actions.setProductList.addToCart,
  setNameLogo: actions.setNameLogo.setNameLogo,
  setProductList: actions.setProductList.setProductList,
  incrementCartAmount: actions.setCart.incrementCartAmount

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

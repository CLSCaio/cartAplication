import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { actions } from "../../store";

import Card from "../../components/Card";
import { CardContainer } from "../styles";


const Carrinho = (props: any) => {
  
  useEffect(() => {  
    props.cartList
    props.setNameLogo('Seu Carrinho')
  }, [])

  const submite = (e: any) => {
    props.removeFromCart(e)
    props.decrementCartAmount()
  }

  const totalCartAmount = () => {
    const values = [0]
    let totalValue = 0
    props.cartList.forEach((e: any) => (values.push(e.price)))
    const valuesNumber = values.map(v => Number(v))
    
    valuesNumber.reduce(function(total, value) {
      return totalValue = total + value
    })
      
    return totalValue
  }

  return (
    <>
      <h1> Eu sou o seu carrinho </h1>

      <CardContainer>
      {props.cartList && props.cartList.map((items: any) => {
          const valuesNumber = Number(items.price)
          const priceBR = valuesNumber.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return (
          <Card
            id={items.id}
            title={items.name}
            img={items.img}
            price={priceBR}
            removeFromCart={(e: any) => submite(e)}
          />
        )})}
      </CardContainer> 

      <h1>
        Valor total dos produtos {props.cartList && totalCartAmount().toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
      </h1>

      { totalCartAmount() >= 10 &&
        <h3 className="freeFrete">
        Frete Gratis 
        </h3>
      }
      
    </>
  )
}

const mapStateToProps = (state: any) => ({
  cartList: state.productList.cartList,

})

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  setNameLogo: actions.setNameLogo.setNameLogo,
  removeFromCart: actions.setProductList.removeFromCart,
  decrementCartAmount: actions.setCart.decrementCartAmount
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)
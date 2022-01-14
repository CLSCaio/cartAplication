import React from "react";
import { connect } from "react-redux";

import { BsFillCartPlusFill } from 'react-icons/bs'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { GrAddCircle } from 'react-icons/gr'
import { IoIosRemoveCircleOutline } from 'react-icons/io'



import { DivCard, DivExtra } from "./styles";

const Card = (props: any):JSX.Element => { 

  return (
    <DivCard >
      
      <h1> {props.title} </h1>
     
      <img src={props.img} alt="Imagem não pode ser carregada" />
      
      <DivExtra>
        <h2>{props.price}</h2>
        {
          props.nameLogo === 'Seu Carrinho' 
          ? <MdOutlineDeleteForever 
              id={props.id} className='remove' 
              onClick={(e) => props.removeFromCart(e.currentTarget.id)}
            />
         
          : <BsFillCartPlusFill id={props.id} onClick={(e) => props.addToCart(e.currentTarget.id)}/>
            
        }
      </DivExtra>
    </DivCard>
  )
}

const mapStateToProps = (state: any) => ({
  nameLogo: state.nameLogo.nameLogo
})

export default connect(mapStateToProps, null)(Card)
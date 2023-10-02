import styled from "styled-components"


export const InputInfor = styled.input`
width: 99%;
height: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 10px;
`
export const Select1= styled.select`
width: 95%;
height: 9%;
  /* background-color: transparent; */
  border: none;
  outline: none;
  margin-bottom: 5px;
  /* padding-left: 10px; */
`

export const Input = styled.input`
width: 94%;
height: 9%;
  border: none;
  outline: none;
  padding-left: 5px;
  margin-top: 10px;
`

export const Caja = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;

    .Icono{
        font-size: 25px;
    }

    .IconoGrandes{
        font-size: 20;
    }

    .Cajafieldset{
        width: 90%;
        height: 7%;
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .InputFecha{
    width: 100%;
    height: 30px;
  }
`

import styled from "styled-components";

export const CardCont = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 5px;
    flex-direction: column;
    background-color: #f8f8f8;
    border-radius: 5px;
`

export const ContClient = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


    .fa-circle-xmark {
        margin-right: 5px;
    }
`
export const DataClient = styled.h3` 
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: solid 1px #cabebe;
`

export const ContentData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
`;
export const LineClient = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 5px;
    align-items: center;
`


export const LineProduct = styled.div`
    width: 100%;
    height: 25%;
`

export const DataProduct = styled.p`
    margin: 0;
`

export const LineAmount = styled.div`
    background-color: #3dade0;
    width: 100%;
    height: 25%;
`

export const LineDate = styled.div`
    background-color: #3dade0;
    width: 100%;
    height: 25%;
`

export const Data = styled.p`
    margin: 0;
    font-weight: 500;
    color: #3dade0;
`

export const DataInfo = styled.p`
    margin: 0;
`
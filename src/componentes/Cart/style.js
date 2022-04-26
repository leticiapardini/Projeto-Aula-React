import styled from 'styled-components'
import ORANGE, { PRIMARY_COLOR } from '../../defaults/colors'

export const CartButton = styled.button`
    border: none;
    outline: none;
    
    position: fixed;
    width: 30px;
    heigth: 30px;
    text-align: center;
    border-radius: 10px 0 0 10px;
    top: 40px;
    box-shadow: 3px 3px 7px rgb(0 0 0 / 10%);
    line-height: 30px;
    cursor: pointer;
    right: 0;
    background-color: #dfdfdf;
    z-index: 1001;
    transition: .5s right ease, .5 box-shadow ease;

    ${({ open }) => open && `
        right: 309px;
        box-shadow: 0px 0px 0px rgb(0 0 0 / 0%);
    `}

    &::before {
      
        color: #fff;
        content: '';
        font-size: 10px;
        width: 16px;
        position: absolute;
        background-color: ${PRIMARY_COLOR};
        height: 16px;
        top: 20px;
        right: 20px;
        border-radius: 50%;
        line-height: 16px;
        font-weigth: 600;
        transform: scale(.5);
        opacity: 0;
        transition: .15s opacity ease, .15s transform ease;

        ${({qty}) => qty && `
            content: '${qty}';
            transform: scale(1);
            opacity: 1;


        `}
    }

`

export const CartArea = styled.div`
    background: #dfdfdf;
    width: 310px;
    box-shadow: 0px 0px 0px rgb(0 0 0 / 0%);
    height: 100%;
    position: fixed;
    right: -310px;
    z-index: 100;
    top: 0;
    transition: .5s right ease, .5 box-shadow ease;
    padding: 20px;
    

    & h2 {
        font-size:16px;
    }

    ${({ open }) => open && `
        right: 0;
        box-shadow: -3px -3px 10px rgb(0,0,0, .3);
    `}
`

export const TotalArea = styled.div`

    border-top: 1px solid #cfcfcf;
    margin-top: 30px;
    padding: 20px;
    font-size: 16px;
`

export const BtnClean = styled.button`
    border:none;
    width:100%;
    background:${PRIMARY_COLOR};
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    outline:none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;

`
    

    
       

        

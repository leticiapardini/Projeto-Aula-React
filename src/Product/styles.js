import styled from "styled-components";
import Button from "../componentes/Button";
import { PRIMARY_COLOR } from "../defaults/colors";

export const SelectButton = styled(Button)`
   
`

export const Container = styled.article`
    background-color : #2a2f40;
    color: #fff;
    
    display: flex;
    flex-direction: row;
    margin: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`

export const PhotoArea = styled.div`
    
    background-color: ${PRIMARY_COLOR};
    border-radius: 0 50% 50% 0;
    height: 300px;
    width: 300px;
    position: relative;
    

    & img {
        position: absolute;
        top: -100px;
        left: -120px;
        pointer-events: none;
    }

    @media (max-width: 768px) {
        & img {
            position: relative;
            top: -20vw;
            left: -25vw;
            width: 100%
            pointer-events: none;
        }
      }
`

export const InfoArea = styled.div`
    flex:1;
    padding: 15px;
`



export const ActionArea = styled.div`
    display:flex;

    & Button:first-of-type {
        margin-right: 30px;
    }

`

export const SizeArea = styled.div`
    displey: flex;
    margin-bottom: 10px;

    & Button:first-of-type {
        margin-left: 30px;
    }

    & Button {
        margin: 0 5px;
        width: 20px;
        height: 20px;
    }


`

export const ColorsArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    align-items: center;

    & > button {
    margin: 0 10px;
    }

    & > button:first-of-type {
    margin-left: 30px;
    }
`
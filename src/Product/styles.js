import styled from "styled-components";

export const Container = styled.article`
    background-color : #2a2f40;
    color: #fff;
    
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
      }
`

export const PhotoArea = styled.div`
    
    background-color: #ff6d39;
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
            top: -28vw;
            left: -28vw;
            width: 100%
            pointer-events: none;
        }
      }
`

export const InfoArea = styled.div`
    flex:1;
    padding: 15px;
`

export const ModelLine = styled.h3`
    color: #ff6d39;
    margin-bottom: 50px;`

export const Collection = styled.p`
    font-size: 18px;
    font-weigt: 300;
    margin:0;
`
export const Description = styled.p`

    font-size: 24px;
    margin: 0 0 5px 0;

`


export const Price = styled.p`

    ${({scratched}) => scratched && `
        text-decoration: line-through;
        text-decoration-color: red;
    `}
    &::before {
    content: '$';
}

    &:first-of-type {
        margin-right: 20px;
    }
`

export const PriceArea = styled.div`
    display:flex;`

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
        margin: 0 10px;
    }
`

export const ColorsArea = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    align-items: center;

    & > div {
    margin: 0 10px;
    }

    & > div:first-of-type {
    margin-left: 30px;
    }
`
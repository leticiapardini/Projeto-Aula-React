import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background: #fcfcfc;
    padding: 5px 10px;
    margin: 10px 0;
    align-items: center;

    & p {
        margin: 0;
    }

    & img {
        widht: 90px;
        heigth: 90px;
    }
`

export const Settings = styled.div`
    display: flex;
    align-items: center;

    & :first-child {
        margin-right: 10px;
    }
`

export const Price = styled.div`
    display: flex;
    align-items: center;

    & :first-child {
        margin-right: 10px;
    }

    & input {
        border: none;
        width: 36px;
        outline: none;
    }

`

export const Description = styled.div`
    font-size: 12px;
    text-transform: uppercase;
    font-weigth: 300;
`
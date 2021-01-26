import styled from 'styled-components';


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: .0625rem solid #eaeaea;
    border-radius: 20px;

    button {
        border-radius: 0 0 20px 20px;
        border: .0625rem solid #eaeaea;
    }

    img {
        max-height: 200px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`
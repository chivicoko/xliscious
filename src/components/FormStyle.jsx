import styled from "styled-components";

const FormStyle = styled.form`
    margin: 0rem 20rem;
    
    div {        
        width: 100%;
        position: relative;
    }

    input {
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default FormStyle;
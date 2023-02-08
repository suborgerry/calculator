
import styled from 'styled-components';

const String = (props) => {
    const Div = styled.div`
        width: ${ props.size / 10 }%;
        height: 20px;
        background: #acaaaa
    `;
    return (
        <Div />
    );
}

const Title = (props) => {
    const H1 = styled.h1`
        font-size: 1em;
    `
    return (
        <H1>{props.text}</H1>
    );
}

export { String, Title };
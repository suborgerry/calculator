import styled from 'styled-components';

const String = (props) => {
    return (
        styled.div`
            width: ${props.size}px;
            height: 20px;
            background: #acaaaa
        `
    )
}

const Title = () => {
    return (
        styled.h1`
            font-size: 1em;
        `
    )
}

export { String, Title };
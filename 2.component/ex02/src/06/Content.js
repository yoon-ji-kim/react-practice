import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    color: #foo;
    font-size: 20px;
    font-weight: bold;
`;

/**
 *  Component Composition (컴포넌트 합성)
 *  - layout 만들때 사용할 수 있음
 */
function Content({children}) {
    return (
        <StyledP>
            {children}
        </StyledP>
    );
}

export default Content;
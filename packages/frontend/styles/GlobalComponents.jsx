import styled, { css } from 'styled-components';

export const Size = {
  s: 's',
  m: 'm',
  l: 'l',
};

export const Button = styled.button`
    border: none;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.gradient};

    font-size: 20px;
    padding: 12px 24px;

    color: white;


    cursor: pointer;

    ${(props) => (props.secondary ? css`
        background: none;
        border: 1px solid ${({ theme }) => `${theme.colors.typo}60`};
    ` : '')}

    ${(props) => (props.size === Size.s ? css`
        padding: 8px 16px;
        font-size: 16px;
    ` : props.size === Size.m ? css`
        padding: 12px 24px;
        font-size: 20px;
    ` : props.size === Size.l ? css`
        padding: 16px 32px;
        font-size: 28px;
    ` : '')}
`;

export const ButtonLink = styled.a`
`;

export const StyledHeadingOne = styled.h1`
    font-size: 64px;
    font-weight: bold;
    font-weight: normal;

    letter-spacing: -0.02em;

    color: white;

    line-height: 1.5;

    margin: 0;
`;

export const StyledHeadingTwo = styled.h2`
    font-size: 48px;
    font-weight: bold;
    font-weight: normal;

    letter-spacing: -0.02em;

    color: white;

    line-height: 1.5;

    margin: 0;
`;

export const StyledText = styled.p`
    font-size: 20px;
    font-weight: normal;
    letter-spacing: -0.02em;

    line-height: 1.5;

    color: white;
`;

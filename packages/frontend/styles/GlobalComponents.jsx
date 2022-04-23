import styled, { css } from 'styled-components';

export const Size = {
  xs: 'xs',
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

    color: ${({ theme }) => theme.colors.typo};

    cursor: pointer;

    ${(props) => (props.secondary ? css`
        background: none;
        border: 1px solid ${({ theme }) => `${theme.colors.typo}60`};
    ` : '')}

    ${(props) => (props.size === Size.xs ? css`
        padding: 8px 16px;
        font-size: 16px;
    ` : props.size === Size.s ? css`
        padding: 10px 20px;
        font-size: 16px;
    ` : props.size === Size.m ? css`
        padding: 12px 24px;
        font-size: 20px;
    ` : props.size === Size.l ? css`
        padding: 16px 32px;
        font-size: 28px;
    ` : '')}

    ${(props) => (props.disabled ? css`
        background: none;
        color: ${({ theme }) => `${theme.colors.typo}60`};
        background-color: ${({ theme }) => `${theme.colors.typo}50`};
    ` : '')}
`;

export const ButtonLink = styled.a`
`;

export const StyledHeadingOne = styled.h1`
    font-size: 64px;
    font-weight: bold;
    font-weight: normal;

    letter-spacing: -0.02em;

    color: ${({ theme }) => theme.colors.typo};

    line-height: 1.5;

    margin: 0;
`;

export const StyledHeadingTwo = styled.h2`
    font-size: 48px;
    font-weight: bold;
    font-weight: normal;

    letter-spacing: -0.02em;

    color: ${({ theme }) => theme.colors.typo};

    line-height: 1.5;

    margin: 0;
`;

export const StyledHeadingThree = styled.h3`
    font-size: 36px;
    font-weight: bold;
    font-weight: normal;

    letter-spacing: -0.02em;

    color: ${({ theme }) => theme.colors.typo};

    line-height: 1.5;

    margin: 0;
`;

export const StyledText = styled.p`
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -0.02em;

    line-height: 1.5;

    color: ${({ theme }) => theme.colors.typo};
`;

export const StyledTag = styled.p`
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.typo};

    font-size: 16px;
    padding: 10px 20px;

    color: ${({ theme }) => theme.colors.bg};
`;
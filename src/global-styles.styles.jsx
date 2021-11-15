import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    form {
        align-items: center;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;

        input {
            width: 600px;
        }

        button {
            margin-left: 8px;
        }
    }

    .input {
        font-size: 16px;
        font-size: Max(16px, 1em);
        font-family: inherit;
        padding: 0.25em 0.5em;
        background-color: #fff;
        border: 2px solid #8b8a8b;
        border-radius: 4px;
        transition: 180ms box-shadow ease-in-out;

        &:focus {
            border-color: hsl(
              var(--input-focus-h),
              var(--input-focus-s),
              var(--input-focus-l)
            );
            box-shadow: 0 0 0 3px
              hsla(
                var(--input-focus-h),
                var(--input-focus-s),
                calc(var(--input-focus-l) + 40%),
                0.8
              );
            outline: 3px solid transparent;
        }
          
    }

    .button {
        background-color: #EA4C89;
        border-radius: 8px;
        border-style: none;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-size: 14px;
        font-weight: 500;
        height: 40px;
        line-height: 20px;
        list-style: none;
        outline: none;
        padding: 8px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: color 100ms;
        vertical-align: baseline;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    .button:hover,
    .button:focus {
        background-color: #F082AC;
    }

    .button[disabled] {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
        cursor: not-allowed;
    }

    @media (max-width: 599px) {
        form {
            input {
                width: 320px;
            }
        }
    }

    @media (min-width: 599px) and (max-width: 1279px) {
        form {
            input {
                width: 600px;
            }
        }
    }
`;
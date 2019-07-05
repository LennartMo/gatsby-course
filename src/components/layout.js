import React from 'react';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => (
    <>
        <Global 
            styles={css`
                * {
                    box-sizing: border-box;
                    margin: 0;
                }

                * + * {
                    margin-top: 1rem;
                }

                html,
                body {
                    margin: 0;
                    color: #555;
                    font-family: Arial;
                }
            `} 
        />
        <header></header>
        <main
            css={css`
                margin: 2rem auto 4rem;
                max-width: 90vw;
                width: 550px;
            `}
        >{children}</main>
    </>
);

export default Layout;
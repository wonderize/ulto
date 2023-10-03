"use client"

import styled from "styled-components"

export default function Wrapper() {
    const Wrapper = styled.div`
    width: 100%;
    padding: 1rem var(--global-offset);
    max-width: var(--desktop-max-width);
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    align-items: center;
    `

    
}


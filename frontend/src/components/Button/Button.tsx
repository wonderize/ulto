"use client"
import styled from "styled-components" 


interface ButtonProps {
  placeholder: string
  style?: React.CSSProperties
}

export default function Button({ placeholder, style }: ButtonProps) {

  const Button = styled.button`
  width: 100%;
  display: block;
  padding: 0.75rem 0.5rem;
  font-size: 1rem;
  background-color: var(--dark-green);
  color: white;
  font-family: var(--roboto);
  font-weight: 500;
  border-radius: var(--border-radius);
  transition: background-color 0.3s;
  margin-top: 2.25rem;

  &:hover, &:focus {
  background-color: var(--darker-green);
}
  `



  return (
   <Button>{placeholder}</Button>
  )
}

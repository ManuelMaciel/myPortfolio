import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';

const StyledContactSection = styled.section`
  max-width: 400px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

export default function Contact() {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">¿Qué sigue?</h2>
      <h2 className="title">Ponte en contacto...</h2>

      <p>
        Hago desarrollo freelance a tiempo completo y no dude en contactarme
        para posibles consultas, colaboraciones, proyectos o cualquier otra cosa, mi bandeja de entrada está siempre abierta. Enviame un mensaje.
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Enviame un mensaje
      </a>
    </StyledContactSection>
  );
};
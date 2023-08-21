import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import { Container, Row, Col } from 'react-bootstrap'; // Importe os componentes do Bootstrap

const Solucao = ({ text, imageUrl }) => {
  return (
    <Container>
      <Row>

        <Col md={6} className="image-container d-flex align-items-start justify-content-start">
        <img
            src={imageUrl}
            className="img-fluid" // Adicionando a classe shadow para o efeito de sombra
            style={{
              maxHeight: '550px',
              width: '90%',
              borderRadius: '30px', // Adicionando um leve arredondamento
            }}
          />
            
        </Col>
        <Col md={6} className="text-container">
        <h1 style={{ fontSize: '50px' }} className="contato">Nossa Proposta</h1><br/>
            <p style={{ fontSize: '30px' }}>{text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Solucao;

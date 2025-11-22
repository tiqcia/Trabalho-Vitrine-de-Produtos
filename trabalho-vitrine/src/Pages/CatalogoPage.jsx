import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardProduto from '../Components/CardProduto';
import produtos from '../data/produtos'; 

function CatalogoPage() {
  return (
    <div className="catalogo-bg">
      <Container className="my-5">

        <Row className="justify-content-center">
          {produtos.map(produto => (
            <Col 
              key={produto.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-5 d-flex justify-content-center">
              <CardProduto {...produto} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CatalogoPage;

import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import LibroProps from './LibroProps';
class Ejercicio2Props extends React.Component {
  constructor(props) {
    super(props);
    this.listaLibros = [];
  

  }
  anadir(){
    this.listaLibros = this.listaLibros.concat(
      <LibroProps
      titulo={this.valorInputTitulo.value}
      autor={this.valorInputAutor.value}
      fecha={this.valorInputFecha.value}
      paginas={this.valorInputPaginas.value}
      portada={this.valorInputPortada.value}
      idioma={this.valorInputIdioma.value}
      />
    );
    this.setState({lista : this.listaLibros});
  }
  render() {
    return (
      <div id="ej2">
        <h2>Ejercicio 2 Con Props</h2>
        
        <ul>
            <Container>
              <Row>
                <Col>
                <li>
                  <input
                    ref={(vIT) => (this.valorInputTitulo = vIT)}
                    type="text"
                    placeholder="Titulo"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vIA) => (this.valorInputAutor = vIA)}
                    type="text"
                    placeholder="Autor"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vIF) => (this.valorInputFecha = vIF)}
                    type="date"
                    placeholder="Fecha de publicacion"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vIP) => (this.valorInputPaginas = vIP)}
                    type="number"
                    placeholder="Numero de paginas"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vIP) => (this.valorInputPortada = vIP)}
                    type="url"
                    placeholder="Portada (URL)"
                  />
                  </li>
                  <li>
                  <input
                    ref={(vII) => (this.valorInputIdioma = vII)}
                    type="text"
                    placeholder="Idioma"
                  />
                  </li>
                </Col>
              </Row>
              <br />
              <button onClick={() => this.anadir()}>Añadir</button>
              <br />
              {this.listaLibros}
            </Container>
        </ul>
      </div>
    );
  }
}

export default Ejercicio2Props;
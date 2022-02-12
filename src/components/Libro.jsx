import React from 'react';
import { Card } from 'react-bootstrap';
class Libro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo : props.titulo,
      autor : props.autor,
      fecha : props.fecha,
      paginas : props.paginas,
      portada : props.portada,
      idioma : props.idioma, 
    };
  }
  componentDidMount() {
    this.setState({
      titulo : localStorage.getItem('titulo'),
      autor : localStorage.getItem('autor'),
      fecha : localStorage.getItem('fecha'),
      paginas : localStorage.getItem('paginas'),
      portada : localStorage.getItem('portada'),
      idioma : localStorage.getItem('idioma'),
    })
  }
  

  render() {
    return (
      <div id="libro">
        <h1>COMPONENTE LIBRO</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.portada} />
          <Card.Body>
            <Card.Title>Libro</Card.Title>
            <Card.Text>
             Titulo: {this.state.titulo}
            </Card.Text>
            <Card.Text>
             Autor: {this.state.autor}
            </Card.Text>
            <Card.Text>
             Fecha: {this.state.fecha}
            </Card.Text>
            <Card.Text>
             Paginas: {this.state.paginas}
            </Card.Text>
            <Card.Text>
             Idioma: {this.state.idioma}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Libro;

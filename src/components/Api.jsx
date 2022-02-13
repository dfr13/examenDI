import React from 'react';
import {Carousel } from 'react-bootstrap';
class Api extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
      img: '',
    };
  }

  async componetDidMount(){
    const response = await fetch (
      'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&language=spanish'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.data,
    });
  }

  render (){
    return (
      <div>
        <h1>Componete API</h1>
        <Carousel>
    {this.state.tableData.map((item) => {
      return (
        <Carousel.Item>
    <img
      className="d-block w-100"
      src={item.cover}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{item.title}</h3>
      <p>{item.author}</p>
    </Carousel.Caption>
  </Carousel.Item>
      );
    })}
</Carousel>
     </div>
    );
  }
}
export default Api
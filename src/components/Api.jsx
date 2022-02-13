import React from 'react';
import {Carousel } from 'react-bootstrap';
import uuid from 'react-uuid';
class Api extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
      img: '',
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&lang=español&num_items=5'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData
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
      alt={item.title}
    />
    <Carousel.Caption key={uuid()}>
      <h1>{item.title}</h1>
      <h3>{item.author}</h3>
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
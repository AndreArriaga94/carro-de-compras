import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from  './components/Title'
import Navbar from './components/Navbar'

class App extends Component{
  state = {
    productos:[
      {name:'Tomate',price:1500,img:'/productos/tomate.jpg'},
      {name:'Arbejas',price:2500,img:'/productos/arbejas.jpg'},
      {name:'Lechuga',price:500,img:'/productos/lechuga.jpg'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state 
    
    if(carro.find(x=> x.name === producto.name)){
      const newCarro = carro.map(x=> x.name === producto.name ? ({
        ...x,
        cantidad: x.cantidad + 1
      })
      : x)
      return this.setState({carro: newCarro})
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  render(){
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} 
                esCarroVisible={esCarroVisible} 
                mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title>

          </Title>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
        {/* <p>carrito de compras</p> */}
      </div>
    )
  }
}

export default App;

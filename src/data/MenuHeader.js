import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Ejercicio2Props from '../components/Ejercicio2Props';
import Ejercicio3 from '../components/Ejercicio3';
import Api from '../components/Api';
export const MenuHeader = [
  {id: 1, path:'/ejercicio1', title: 'Ejercicio 1', component: Ejercicio1},
  {id: 2, path:'/ejercicio2', title: 'Ejercicio 2', component: Ejercicio2},
  {id: 3, path:'/ejercicio2props', title: 'Ejercicio 2 Props', component: Ejercicio2Props},
  {id: 4, path:'/ejercicio3', title: 'Ejercicio 3', component: Ejercicio3},
  {id: 5, path:'/api', title: 'API', component: Api},
]
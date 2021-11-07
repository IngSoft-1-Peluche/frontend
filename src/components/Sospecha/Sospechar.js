import React from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';



const Sospechar = () => {

  var jugador = JSON.parse(sessionStorage.getItem('loguedo'));

  const [ws, setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${jugador.id_jugador}`));

  const [cartasSos, SetCartasSos] = useState([null])
  const {
    register,
    handleSubmit,
  } = useForm();

 /* ws.onmessage= function (event) {
    
    const evento = JSON.parse(event.data)

    switch (evento.action){

      case 'elegir_sosecha':
        const datos = evento.data.cartas
        SetCartasSos(datos)
        return;
    }
  }*/

  const onSubmit = async (info) => {
    const data = JSON.stringify({action:'elegir_sospecha', data: info})
    ws.send(data)
    return (
    <div>Usted sospecho de {cartasSos[0]},{cartasSos[1]} y de {cartasSos[2]} </div>)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="nombre_victima">Elegí una víctima:</label>
      <select {...register("nombre_victima")} >
        <option value="Conde">Conde</option>
        <option value="Condesa">Condesa</option>
        <option value="Ama de llaves">Ama de llaves</option>
        <option value="Mayordomo">Mayordomo</option>
        <option value="Doncella">Doncella</option>
        <option value="Jardinero">Jardinero</option>
      </select>
      <div>
      <label htmlFor="nombre_monstruo">Elegí una monstruo:</label>
      <select {...register("nombre_monstruo")} >
        <option value="Drácula">Drácula</option>
        <option value="Frankestein">Frankestein</option>
        <option value="Hombre lobo">Hombre lobo</option>
        <option value="Fantasma">Fantasma</option>
        <option value="Momia">Momia</option>
        <option value="Dr. Jekyll Hyde">Dr. Jekyll Hyde</option>
      </select>
      </div>
      <input type="submit" value="Realizar sospecha" />
    </form>
  );
}

export default Sospechar ;
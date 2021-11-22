import React, { useEffect } from 'react';
import './Tablero.css';
import cochera from '../../assets/imagenes/cochera.jpg';
import alcoba from '../../assets/imagenes/alcoba.jpg';
import biblioteca from '../../assets/imagenes/biblioteca.jpg';
import vestibulo from '../../assets/imagenes/vestibulo.jpg';
import misterio from '../../assets/imagenes/misterio.jpg';
import panteon from '../../assets/imagenes/panteon.jpg';
import bodega from '../../assets/imagenes/bodega.jpg';
import salon from '../../assets/imagenes/salon.jpg';
import laboratorio from '../../assets/imagenes/laboratorio.jpg';
import entrada_1 from '../../assets/imagenes/entrada.jpg';
import casilla_1 from '../../assets/imagenes/casilla_1.jpg';
import casilla_2 from '../../assets/imagenes/casilla_2.jpg';
import casilla_3 from '../../assets/imagenes/casilla_3.jpg';
import casilla_4_vampiro from '../../assets/imagenes/casilla_4_vampiro.jpg';
import casilla_5 from '../../assets/imagenes/casilla_5.jpg';
import entrada_2 from '../../assets/imagenes/entrada_2.jpg';
import casilla_6 from '../../assets/imagenes/casilla_6.jpg';
import casilla_7 from '../../assets/imagenes/casilla_7.jpg';
import casilla_8_serpiente from '../../assets/imagenes/casilla_8_serpiente.jpg';
import casilla_9 from '../../assets/imagenes/casilla_9.jpg';
import casilla_10 from '../../assets/imagenes/casilla_10.jpg';
import casilla_11_trampilla from '../../assets/imagenes/casilla_11_trampilla.jpg'
import casilla_12 from '../../assets/imagenes/casilla_12.jpg';
import casilla_13 from '../../assets/imagenes/casilla_13.jpg';
import casilla_14 from '../../assets/imagenes/casilla_14.jpg';
import casilla_15 from '../../assets/imagenes/casilla_15.jpg';
import casilla_16 from '../../assets/imagenes/casilla_16.jpg';
import casilla_17 from '../../assets/imagenes/casilla_17.jpg';
import casilla_18 from '../../assets/imagenes/casilla_18.jpg';
import casilla_19_serpiente from '../../assets/imagenes/casilla_19_serpiente.jpg';
import casilla_20 from '../../assets/imagenes/casilla_20.jpg';
import casilla_21 from '../../assets/imagenes/casilla_21.jpg';
import casilla_22 from '../../assets/imagenes/casilla_22.jpg';
import casilla_23 from '../../assets/imagenes/casilla_23.jpg';
import entrada_3 from '../../assets/imagenes/entrada_3.jpg';
import entrada_4 from '../../assets/imagenes/entrada_4.jpg';
import casilla_24 from '../../assets/imagenes/casilla_24.jpg';
import casilla_25 from '../../assets/imagenes/casilla_25.jpg';
import casilla_26_alacran from '../../assets/imagenes/casilla_26_alacran.jpg';
import casilla_27 from '../../assets/imagenes/casilla_27.jpg';
import casilla_28 from '../../assets/imagenes/casilla_28.jpg';
import casilla_29 from '../../assets/imagenes/casilla_29.jpg';
import casilla_30 from '../../assets/imagenes/casilla_30.jpg';
import casilla_31 from '../../assets/imagenes/casilla_31.jpg';
import casilla_32 from '../../assets/imagenes/casilla_32.jpg';
import casilla_33 from '../../assets/imagenes/casilla_33.jpg';
import casilla_34 from '../../assets/imagenes/casilla_34.jpg';
import casilla_35 from '../../assets/imagenes/casilla_35.jpg';
import casilla_36 from '../../assets/imagenes/casilla_36.jpg';
import casilla_37 from '../../assets/imagenes/casilla_37.jpg';
import casilla_38 from '../../assets/imagenes/casilla_38.jpg';
import casilla_39 from '../../assets/imagenes/casilla_39.jpg';
import casilla_40 from '../../assets/imagenes/casilla_40.jpg';
import entrada_5 from '../../assets/imagenes/entrada_5.jpg';
import casilla_41 from '../../assets/imagenes/casilla_41.jpg';
import casilla_42 from '../../assets/imagenes/casilla_42.jpg';
import casilla_43 from '../../assets/imagenes/casilla_43.jpg';
import casilla_44_araña from '../../assets/imagenes/casilla_44_araña.jpg';
import casilla_45 from '../../assets/imagenes/casilla_45.jpg';
import casilla_46_trampilla from '../../assets/imagenes/casilla_46_trampilla.jpg';
import casilla_47 from '../../assets/imagenes/casilla_47.jpg';
import casilla_48 from '../../assets/imagenes/casilla_48.jpg';
import casilla_49 from '../../assets/imagenes/casilla_49.jpg';
import casilla_50 from '../../assets/imagenes/casilla_50.jpg';
import casilla_51 from '../../assets/imagenes/casilla_51.jpg';
import casilla_52 from '../../assets/imagenes/casilla_52.jpg';
import casilla_53_trampilla from '../../assets/imagenes/casilla_53_trampilla.jpg';
import casilla_54 from '../../assets/imagenes/casilla_54.jpg';
import casilla_55_araña from '../../assets/imagenes/casilla_55_araña.jpg';
import casilla_56 from '../../assets/imagenes/casilla_56.jpg';
import casilla_57 from '../../assets/imagenes/casilla_57.jpg';
import casilla_58 from '../../assets/imagenes/casilla_58.jpg';
import entrada_6 from '../../assets/imagenes/entrada_6.jpg';
import casilla_59_murcielago from '../../assets/imagenes/casilla_59_murcielago.jpg';
import casilla_60 from '../../assets/imagenes/casilla_60.jpg';
import casilla_61 from '../../assets/imagenes/casilla_61.jpg';
import casilla_62 from '../../assets/imagenes/casilla_62.jpg';
import casilla_63 from '../../assets/imagenes/casilla_63.jpg';
import entrada_07 from '../../assets/imagenes/entrada_07.jpg';
import casilla_64_escorpion from '../../assets/imagenes/casilla_64_escorpion.jpg';
import casilla_65 from '../../assets/imagenes/casilla_65.jpg';
import casilla_66 from '../../assets/imagenes/casilla_66.jpg';
import casilla_67 from '../../assets/imagenes/casilla_67.jpg';
import casilla_68 from '../../assets/imagenes/casilla_68.jpg';
import entrada_08 from '../../assets/imagenes/entrada_08.jpg';


const Tablero = (params) => {


    useEffect(() => {
        cambiar()
    })

    const lista = params.estado

    const EstadoJugadores = (id) => {
        return (
            lista.map(jugador => (
                parseInt(jugador.posicion) === parseInt(id) && <div className="dot" key={jugador.apodo} style={{ backgroundColor: jugador.color }}></div>
            )))
    }


    const cambiar = () => {
        params.casillasDisponibles.forEach(element => {
            var a = document.getElementById(element);
            a.classList.toggle('img');
        });
    }

    const click_on_image = (event) => {
        if (params.casillasDisponibles.find(element => parseInt(element) === parseInt(event.target.id))) {
            const data = JSON.stringify({ action: 'mover_jugador', data: { nueva_posicion: parseInt(event.target.id) } })
            params.ws.send(data)
            event.preventDefault()
        }
    }

    const Casillero = ({ id, imagen, width, height }) => {

        return (
            <div className="container" >
                <img src={imagen} id={id} onClick={click_on_image} alt="imagen" width={width * 0.70} height={height * 0.70} />
                <div className="centered dots">
                    {EstadoJugadores(id)}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="todo1 ">
                <div className="fondo" >
                    <div className="todo">
                        <Casillero id="1" imagen={cochera} width="300" height="300" />
                        <div className="todo1">
                            <Casillero id="2" imagen={entrada_1} width="60" height="83" />
                            <Casillero id="6" imagen={casilla_1} width="60" height="43" />
                            <Casillero id="8" imagen={casilla_2} width="60" height="43" />
                            <Casillero id="10" imagen={casilla_3} width="60" height="43" />
                            <Casillero id="12" imagen={casilla_4_vampiro} width="60" height="43" />
                            <Casillero id="14" imagen={casilla_5} width="60" height="43" />
                        </div>
                        <div>
                            <Casillero id="3" imagen={alcoba} width="300" height="300" />
                        </div>
                        <div className="todo1">
                            <Casillero id="4" imagen={entrada_4} width="60" height="83" />
                            <Casillero id="7" imagen={casilla_24} width="60" height="43" />
                            <Casillero id="9" imagen={casilla_25} width="60" height="43" />
                            <Casillero id="11" imagen={casilla_26_alacran} width="60" height="43" />
                            <Casillero id="13" imagen={casilla_27} width="60" height="43" />
                            <Casillero id="15" imagen={casilla_28} width="60" height="43" />
                        </div>
                        <div>
                            <Casillero id="5" imagen={biblioteca} width="300" height="300" />
                        </div>
                    </div>

                    <div className="todo">
                        <Casillero id="16" imagen={entrada_2} width="86" height="60" />
                        <Casillero id="17" imagen={casilla_6} width="43" height="60" />
                        <Casillero id="18" imagen={casilla_7} width="43" height="60" />
                        <Casillero id="19" imagen={casilla_8_serpiente} width="43" height="60" />
                        <Casillero id="20" imagen={casilla_9} width="43" height="60" />
                        <Casillero id="21" imagen={casilla_10} width="43" height="60" />
                        <Casillero id="22" imagen={casilla_11_trampilla} width="60" height="60" />
                        <Casillero id="23" imagen={casilla_12} width="50" height="60" />
                        <Casillero id="24" imagen={casilla_13} width="50" height="60" />
                        <Casillero id="25" imagen={casilla_14} width="50" height="60" />
                        <Casillero id="26" imagen={casilla_15} width="50" height="60" />
                        <Casillero id="27" imagen={casilla_16} width="50" height="60" />
                        <Casillero id="28" imagen={casilla_17} width="50" height="60" />
                        <Casillero id="29" imagen={casilla_18} width="60" height="60" />
                        <Casillero id="30" imagen={casilla_19_serpiente} width="43" height="60" />
                        <Casillero id="31" imagen={casilla_20} width="43" height="60" />
                        <Casillero id="32" imagen={casilla_21} width="43" height="60" />
                        <Casillero id="33" imagen={casilla_22} width="43" height="60" />
                        <Casillero id="34" imagen={casilla_23} width="43" height="60" />
                        <Casillero id="35" imagen={entrada_3} width="86" height="60" />
                    </div>

                    <div className="todo">
                        <Casillero id="36" imagen={vestibulo} width="300" height="300" />
                        <div className="todo1">
                            <Casillero id="37" imagen={casilla_29} width="60" height="50" />
                            <Casillero id="40" imagen={casilla_30} width="60" height="50" />
                            <Casillero id="42" imagen={casilla_31} width="60" height="50" />
                            <Casillero id="44" imagen={casilla_32} width="60" height="50" />
                            <Casillero id="46" imagen={casilla_33} width="60" height="50" />
                            <Casillero id="48" imagen={casilla_34} width="60" height="50" />

                        </div>
                        <div>
                            <Casillero id="0" imagen={misterio} width="300" height="300" />
                        </div>
                        <div className="todo1">
                            <Casillero id="38" imagen={casilla_35} width="60" height="50" />
                            <Casillero id="41" imagen={casilla_36} width="60" height="50" />
                            <Casillero id="43" imagen={casilla_37} width="60" height="50" />
                            <Casillero id="45" imagen={casilla_38} width="60" height="50" />
                            <Casillero id="47" imagen={casilla_39} width="60" height="50" />
                            <Casillero id="49" imagen={casilla_40} width="60" height="50" />
                        </div>
                        <div>
                            <Casillero id="39" imagen={panteon} width="300" height="300" />
                        </div>
                    </div>

                    <div className="todo">
                        <Casillero id="50" imagen={entrada_5} width="86" height="60" />
                        <Casillero id="51" imagen={casilla_41} width="43" height="60" />
                        <Casillero id="52" imagen={casilla_42} width="43" height="60" />
                        <Casillero id="53" imagen={casilla_43} width="43" height="60" />
                        <Casillero id="54" imagen={casilla_44_araña} width="43" height="60" />
                        <Casillero id="55" imagen={casilla_45} width="43" height="60" />
                        <Casillero id="56" imagen={casilla_46_trampilla} width="60" height="60" />
                        <Casillero id="57" imagen={casilla_47} width="50" height="60" />
                        <Casillero id="58" imagen={casilla_48} width="50" height="60" />
                        <Casillero id="59" imagen={casilla_49} width="50" height="60" />
                        <Casillero id="60" imagen={casilla_50} width="50" height="60" />
                        <Casillero id="61" imagen={casilla_51} width="50" height="60" />
                        <Casillero id="62" imagen={casilla_52} width="50" height="60" />
                        <Casillero id="63" imagen={casilla_53_trampilla} width="60" height="60" />
                        <Casillero id="64" imagen={casilla_54} width="43" height="60" />
                        <Casillero id="65" imagen={casilla_55_araña} width="43" height="60" />
                        <Casillero id="66" imagen={casilla_56} width="43" height="60" />
                        <Casillero id="67" imagen={casilla_57} width="43" height="60" />
                        <Casillero id="68" imagen={casilla_58} width="43" height="60" />
                        <Casillero id="69" imagen={entrada_6} width="86" height="60" />
                    </div>

                    <div className="todo">
                        <Casillero id="70" imagen={bodega} width="300" height="300" />
                        <div className="todo1">
                            <Casillero id="71" imagen={casilla_59_murcielago} width="60" height="43" />
                            <Casillero id="75" imagen={casilla_60} width="60" height="43" />
                            <Casillero id="77" imagen={casilla_61} width="60" height="43" />
                            <Casillero id="79" imagen={casilla_62} width="60" height="43" />
                            <Casillero id="81" imagen={casilla_63} width="60" height="43" />
                            <Casillero id="83" imagen={entrada_07} width="60" height="83" />
                        </div>
                        <div>
                            <Casillero id="72" imagen={salon} width="300" height="300" />
                        </div>
                        <div className="todo1">
                            <Casillero id="73" imagen={casilla_64_escorpion} width="60" height="43" />
                            <Casillero id="76" imagen={casilla_65} width="60" height="43" />
                            <Casillero id="78" imagen={casilla_66} width="60" height="43" />
                            <Casillero id="80" imagen={casilla_67} width="60" height="43" />
                            <Casillero id="82" imagen={casilla_68} width="60" height="43" />
                            <Casillero id="84" imagen={entrada_08} width="60" height="83" />
                        </div>
                        <div>
                            <Casillero id="74" imagen={laboratorio} width="300" height="300" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tablero;



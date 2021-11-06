import React from 'react';
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

const Tablero = () =>{

    const click_on_image = () => {console.log("click")}
    
    return(
        <div>
            <div className="todo">
                <img src={cochera} onClick={click_on_image} alt="casilla 1"/>
                <div className="todo1">
                    <img src={entrada_1} onClick={click_on_image} alt="entrada_1"/>
                    <img src={casilla_1} onClick={click_on_image} alt="casilla_1"/>  
                    <img src={casilla_2} onClick={click_on_image} alt="casilla_2"/>
                    <img src={casilla_3} onClick={click_on_image} alt="casilla_3"/>
                    <img src={casilla_4_vampiro} onClick={click_on_image} alt="casilla_4_vampiro"/>
                    <img src={casilla_5} onClick={click_on_image} alt="casilla_5"/>
                </div>
                <div className="todo">
                    <img src={alcoba} onClick={click_on_image} alt="alcoba"/>
                </div>
                <div className="todo1">
                    <img id="5" src={entrada_4} onClick={click_on_image} alt="entrada_4"/>
                    <img src={casilla_24} onClick={click_on_image} alt="casilla_24"/>  
                    <img src={casilla_25} onClick={click_on_image} alt="casilla_25"/>
                    <img src={casilla_26_alacran} onClick={click_on_image} alt="casilla_26_alacran"/>
                    <img src={casilla_27} onClick={click_on_image} alt="casilla_27"/>
                    <img src={casilla_28} onClick={click_on_image} alt="casilla_28"/>
                </div>
                <div className="todo">
                    <img src={biblioteca} onClick={click_on_image} alt="biblioteca"/>
                </div>
            </div>

            <div className="todo">
                <img src={entrada_2} onClick={click_on_image} alt="entrada_2"/>
                <img src={casilla_6} onClick={click_on_image} alt="casilla_6"/>
                <img src={casilla_7} onClick={click_on_image} alt="casilla_7"/>
                <img src={casilla_8_serpiente} onClick={click_on_image} alt="casilla_8_serpiente"/>
                <img src={casilla_9} onClick={click_on_image} alt="casilla_9"/>
                <img src={casilla_10} onClick={click_on_image} alt="casilla_10"/>
                <img src={casilla_11_trampilla} onClick={click_on_image} alt="casilla_11_trampilla"/>
                <img src={casilla_12} onClick={click_on_image} alt="casilla_12"/>
                <img src={casilla_13} onClick={click_on_image} alt="casilla_13"/>
                <img src={casilla_14} onClick={click_on_image} alt="casilla_14"/>
                <img src={casilla_15} onClick={click_on_image} alt="casilla_15"/>
                <img src={casilla_16} onClick={click_on_image} alt="casilla_16"/>
                <img src={casilla_17} onClick={click_on_image} alt="casilla_17"/>
                <img src={casilla_18} onClick={click_on_image} alt="casilla_18"/>
                <img src={casilla_19_serpiente} onClick={click_on_image} alt="casilla_19_serpiente"/>
                <img src={casilla_20} onClick={click_on_image} alt="casilla_20"/>
                <img src={casilla_21} onClick={click_on_image} alt="casilla_21"/>
                <img src={casilla_22} onClick={click_on_image} alt="casilla_22"/>
                <img src={casilla_23} onClick={click_on_image} alt="casilla_23"/>
                <img src={entrada_3} onClick={click_on_image} alt="entrada_3"/>
            </div>
            
            <div className="todo">
                <img src={vestibulo} onClick={click_on_image} alt="vestibulo"/>
                <div className="todo1">
                    <img src={casilla_29} onClick={click_on_image} alt="casilla_29"/>
                    <img src={casilla_30} onClick={click_on_image} alt="casilla_30"/>  
                    <img src={casilla_31} onClick={click_on_image} alt="casilla_31"/>
                    <img src={casilla_32} onClick={click_on_image} alt="casilla_32"/>
                    <img src={casilla_33} onClick={click_on_image} alt="casilla_33"/>
                    <img src={casilla_34} onClick={click_on_image} alt="casilla_34"/>
                </div>
                <div className="todo">
                    <img src={misterio} onClick={click_on_image} alt="misterio"/>
                </div>
                <div className="todo1">
                    <img src={casilla_35} onClick={click_on_image} alt="casilla_35"/>
                    <img src={casilla_36} onClick={click_on_image} alt="casilla_36"/>
                    <img src={casilla_37} onClick={click_on_image} alt="casilla_37"/>
                    <img src={casilla_38} onClick={click_on_image} alt="casilla_38"/>
                    <img src={casilla_39} onClick={click_on_image} alt="casilla_39"/>
                    <img src={casilla_40} onClick={click_on_image} alt="casilla_40"/> 
                </div>
                <div className="todo">
                    <img src={panteon} onClick={click_on_image} alt="panteon"/>
                </div>                
            </div>

            <div className="todo">
                <img src={entrada_5} onClick={click_on_image} alt="entrada_5"/>
                <img src={casilla_41} onClick={click_on_image} alt="casilla_41"/>
                <img src={casilla_42} onClick={click_on_image} alt="casilla_42"/>
                <img src={casilla_43} onClick={click_on_image} alt="casilla_43"/>
                <img src={casilla_44_araña} onClick={click_on_image} alt="casilla_44_araña"/>
                <img src={casilla_45} onClick={click_on_image} alt="casilla_45"/>
                <img src={casilla_46_trampilla} onClick={click_on_image} alt="casilla_46_trampilla"/>
                <img src={casilla_47} onClick={click_on_image} alt="casilla_47"/>
                <img src={casilla_48} onClick={click_on_image} alt="casilla_48"/>
                <img src={casilla_49} onClick={click_on_image} alt="casilla_49"/>
                <img src={casilla_50} onClick={click_on_image} alt="casilla_50"/>
                <img src={casilla_51} onClick={click_on_image} alt="casilla_51"/>
                <img src={casilla_52} onClick={click_on_image} alt="casilla_52"/>
                <img src={casilla_53_trampilla} onClick={click_on_image} alt="casilla_53_trampilla"/>
                <img src={casilla_54} onClick={click_on_image} alt="casilla_54"/>
                <img src={casilla_55_araña} onClick={click_on_image} alt="casilla_55_araña"/>
                <img src={casilla_56} onClick={click_on_image} alt="casilla_56"/>
                <img src={casilla_57} onClick={click_on_image} alt="casilla_57"/>
                <img src={casilla_58} alt="casilla_58"/>
                <img src={entrada_6} onClick={click_on_image} alt="entrada_6"/>
            </div>
            <div className="todo">
                <img src={bodega} onClick={click_on_image} alt="bodega"/>
                <div className="todo1">
                    <img src={casilla_59_murcielago} onClick={click_on_image} alt="casilla_59_murcielago"/>  
                    <img src={casilla_60} onClick={click_on_image} alt="casilla_60"/>
                    <img src={casilla_61} onClick={click_on_image} alt="casilla_61"/>
                    <img src={casilla_62} onClick={click_on_image} alt="casilla_62"/>
                    <img src={casilla_63} onClick={click_on_image} alt="casilla_63"/>
                    <img src={entrada_07} onClick={click_on_image} alt="entrada_07"/>
                </div>
                <div className="todo">
                    <img src={salon} onClick={click_on_image} alt="salon"/>
                </div>    
                <div className="todo1">
                    <img src={casilla_64_escorpion} onClick={click_on_image} alt="casilla_64_escorpion"/>
                    <img src={casilla_65} onClick={click_on_image} alt="casilla_65"/>
                    <img src={casilla_66} onClick={click_on_image} alt="casilla_66"/>
                    <img src={casilla_67} onClick={click_on_image} alt="casilla_67"/>
                    <img src={casilla_68} onClick={click_on_image} alt="casilla_68"/>
                    <img src={entrada_08} onClick={click_on_image} alt="entrada_08"/>
                </div>
                <div className="todo">
                    <img src={laboratorio} onClick={click_on_image} alt="laboratorio"/>
                </div> 
            </div>
        </div>
    )

}

export default Tablero;

/*.fondo {
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    height: 115vh;
  }*/

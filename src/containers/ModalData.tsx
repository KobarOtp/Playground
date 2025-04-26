import Icons from '../components/Icons';
import formatNumber from '../helpers/formatNumber';
import { useAppSelector } from '../hooks/useRedux';

const ModalData = () => {

    const listaCarrito = useAppSelector((state) => state.shoppingCart.shoppingCart);

    {
        listaCarrito.map((producto: any) => (
            <div key={producto.id} className='item-data-modal'>
                <div className='info-container'>

                    <div className='item-data-info-modal'>
                        <div className='carrito'>
                            {/* <Images img={producto.imageUrl[0]} /> */}
                            <img src={producto.imageUrl[0]  } alt='imagen-ficticia' />
                        </div>

                        <div className='info-item'>
                            <p className="name-item">{producto.name}</p>
                            <p className="modelo-item">{producto.modelo} | {producto.marca[0]}</p>
                            <p className="codigo-item">{producto.codigo}</p>
                        </div>
                    </div>
                    <div className="carrito-marca">
                        <div className="carrito">
                            {/* <Images img={producto.marca[0]} /> */}
                            <img src={producto.marca[0]} alt="imagen-ficticia" />
                        </div>
                    </div>

                </div>
                <div className="item-footer">
                    <div className="footer-info">
                        <button className="disminuir cantidad">-</button>
                        <input type="number" name="" id=""
                            defaultValue={1} />
                        <button className="aumentar cantidad">+</button>


                    </div>
                    <div className="item-data-info-precio">
                        <div className="item-precio">
                            {(() => {
                                const precio = producto.price * ((100 - producto.descuento) !== 100 ? (100 - producto.descuento) / 100 : 1);
                                return <p>{`$${formatNumber(precio)}`}</p>;
                            })()}
                        </div>
                        <div className="item-precio-descuento">
                            <p>${formatNumber(producto.price)}</p>
                        </div>
                        <div className="item-svg">
                            <Icons icono="eliminar" />
                        </div>

                    </div>
                </div>
            </div>
        ))
    }
}

export default ModalData;
import Icons from "../../components/Icons"
// import { BuscadorGeneral } from './buscador/buscador'
// import ButtonMenu from './buttons/button'

// interface MenuTop {
//     title: string;
//     subtitle:string;
//     iconos: string[];
//     type:string;
// }

interface HeaderBottomProps {
    title: string;
    subtitle:string;
    icons: string[];
    type:string;
}

export default function HeaderBottom ({infoMenu}: {infoMenu:HeaderBottomProps}) {
   
    return (
        <div className="menu-top">
            <div className="menu-top-container">
                <BuscadorGeneral infoModal={infoMenu}/>
                <Icons icono={Object.values(infoMenu.icons)[2] || "none"} />
            </div>
        </div>
    )
}
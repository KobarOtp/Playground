import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
    
    interface menuData {
        title: string;
        subtitle: string;
        iconos: string[];
        type: string;
    }

    const menuData = {
        title: 'titulo',
        subtitle: 'subtitulo',
        icons: ['iconOne', 'iconeTwo', 'iconThree'],
        type: 'tipo'
    }

    return (
        <header>
            <HeaderTop infoMenu={menuData} />
            <HeaderBottom infoMenu={menuData}/>
        </header>
    )
}

export default Header;
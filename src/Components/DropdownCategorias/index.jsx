import { Dropdown } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../Providers/LanguageProvider";

function DropdownCategorias() {
    const { language } = useContext(LanguageContext);
    const [categoria, setCategoria] = useState('Todos');
    const categorias = ['Todos', 'Casas', 'Apartamentos', 'Comercial', 'Edifícios', 'Urbanismo']
    const categoriasEn = ['All', 'Houses', 'Apartments', 'Commercial', 'Buildings', 'Urbanism']
    const categoriasMap = language === 'br' ? categorias : categoriasEn;
    const handleSelect = (eventKey) => {
        setCategoria(eventKey);
        if(language !== 'br')
        {
            const index = categoriasEn.indexOf(eventKey)
            eventKey = categorias[index];
        }
        const event = new CustomEvent('categoriaChange',{ detail: eventKey });
        document.dispatchEvent(event);
    }
    useEffect(() => {
        if(language !== 'br')
        {
            const index = categorias.indexOf(categoria)
            setCategoria(categoriasEn[index]);
        }
        else if(categoria !== 'Todos')
        {
            const index = categoriasEn.indexOf(categoria)
            setCategoria(categorias[index]);
        }
    }, [language])
    return ( 
    <>
    <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
            {categoria}
            <Dropdown.Menu>
                {categoriasMap.map((categoria) => {
                    return <Dropdown.Item key={categoria} eventKey={categoria}>{categoria}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown.Toggle>
    </Dropdown>
    </> 
    );
}

export default DropdownCategorias;
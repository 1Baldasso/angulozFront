import Logo from '../../Images/Logo.png'
import PrimeiraCasa from '../../Images/telaProjects/PrimeiraCasa.jpg'
import PrimeiraCasa3 from '../../Images/telaProjects/PrimeiraCasa3.jpg'
import SegundaCasa from '../../Images/telaProjects/SegundaCasa.jpg'
function getProjetos()
{
    return Array.from([{
        titulo: "Casa 1",
        descricao: "teste",
        imagens: [
            PrimeiraCasa3,
            PrimeiraCasa3
        ]
    },
    {
        titulo: "Casa 2",
        descricao: "teste",
        imagens: [
            SegundaCasa,
            SegundaCasa
        ]
    },
    {
        titulo: "Casa 3",
        descricao: "teste",
        imagens: [
            PrimeiraCasa,
            PrimeiraCasa
        ]
    },
    {
        titulo: "Casa 4",
        descricao: "teste",
        imagens: [
            PrimeiraCasa,
            PrimeiraCasa
        ]
    },
    {
        titulo: "Casa 5",
        descricao: "teste",
        imagens: [
            PrimeiraCasa3,
            PrimeiraCasa3
        ]
    },
    {
        titulo: "Casa 6",
        descricao: "teste",
        imagens: [
            SegundaCasa,
            SegundaCasa
        ]
    }
    ])
}

export {getProjetos}
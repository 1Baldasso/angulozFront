import Header from '../../Components/Header';
import React, { useEffect, useContext } from 'react';
import SlideShow from '../../Components/SlideShow';
import ProjetosService from '../../Services/projetos.service';
import { LanguageContext } from '../../Providers/LanguageProvider';

function Home() {
    const { language } = useContext(LanguageContext);
    useEffect(() => {
        const lastAccessLocal = localStorage.getItem('lastAccess')
        async function fetchProjetos() {
            try {
                const service = new ProjetosService();
                await service.getAll(language);
            } catch (error) {
            }
        }
        if (lastAccessLocal) {
            const lastAccess = new Date(lastAccessLocal);
            const now = new Date();
            const diff = now.getTime() - lastAccess.getTime();
            const diffMinutes = Math.floor(diff / 60000);
            if (diffMinutes > 10) {
                localStorage.removeItem('projetos');
                fetchProjetos();
            }
            return;
        }
        fetchProjetos();
    }, [])
    return (
        <>
            <Header />
            <SlideShow />
        </>
    );
}

export default Home;
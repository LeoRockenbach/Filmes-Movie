import Header from '../Layout/Header'
import Footer from '../Layout/Footer';
import Main from '../Layout/Main';
export default function Homepage() {

    const title= 'Home';
    const footer= 'React Movies @ 2022. Todos os direitos reservados';
    const subtituloHome= 'Filmes Populares';

    return (
        <>
        <Header title={title}/>
        <Main textSubtitulo={subtituloHome} />
        <Footer textFooter= {footer} />
        </>
    )

}
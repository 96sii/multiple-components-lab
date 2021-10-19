import Film from './Film.js';


const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <Film key={film.id} name={film.name} url={film.url}></Film>
        )
    })

    return (
        <>
            <ul>{filmNodes}</ul>
        </>
    );
}

export default FilmList;
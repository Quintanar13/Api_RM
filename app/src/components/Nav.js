import React from 'react';

const Nav = ({pagina, npagina}) => {
    return(
        <nav aria-label="...">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href='#' onClick={()=> npagina(pagina = 1)}>First</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href='#' onClick={()=> npagina(pagina-1)}>Previous</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href='#' onClick={()=> npagina(pagina+1)}>Next</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href='#' onClick={()=> npagina(pagina = 42)}>Last</a>
                </li>
            </ul>
        </nav>
    );
};
   
export default Nav;
import React from 'react';

const Nav = ({pagina, npagina}) => {
    return(
        <nav aria-label="...">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                    <a class="page-link" href='#' onClick={()=> npagina(pagina = 1)}>First</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href='#' onClick={()=> npagina(pagina-1)}>Previous</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href='#' onClick={()=> npagina(pagina+1)}>Next</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href='#' onClick={()=> npagina(pagina = 42)}>Last</a>
                </li>
            </ul>
        </nav>
    );
};
   
export default Nav;
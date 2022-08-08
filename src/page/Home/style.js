import styled from 'styled-components'

export const Container = styled.div`

h1 {
    text-align: center;
    font-size: 400%;
    margin: 4rem 0;
    text-shadow: 5px 5px 5px rgba(0,0,0,0.4)
}


`


export const MovieList = styled.ul`

list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
column-gap: 3rem;
row-gap: 4rem;

` 

export const Movie = styled.li`

display: flex;
flex-direction: column;
align-items: center;



img{
    width: 210px;
    border-radius: 1rem;
    margin-bottom: 2rem;
}


span {
    font-weight: bold;
    font-size: 135%;
    text-align: center;
}


a{
    transition: all .3s;
}

a:hover{
    transform: scale(1.1)
}



`



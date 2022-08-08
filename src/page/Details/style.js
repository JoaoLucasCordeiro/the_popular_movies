import styled from "styled-components";

export const Container = styled.div`



padding: 4.5rem 0;

h1 {
    margin: 3rem 0;
    font-size: 300%;
    text-shadow: 5px 5px 5px rgba(0,0,0,0.4)

}


.movie {
    display: flex;
    align-items: center;
    justify-content: center;
}


.movie img{
    width: 300px;
    border-radius: 1rem;
}


.details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
}

span {
    line-height: 150%;
    margin-bottom: 1rem;
    font-size: 115%;
}

.releaseDate {
    opacity: 0.8;
}

button{
    background-color: #E68C4D;
    padding: 0.8rem 2rem;
    outline: none;
    color: #EEE;
    border-radius: 1.5rem;
    margin-top: 1rem;
    border: none;
    font-size: 1.17rem;
    cursor: pointer;
    transition: all .3s;
}


button:hover{
    transform: scale(0.9)
}


`
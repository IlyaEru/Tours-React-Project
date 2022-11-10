import styled from "styled-components";

export const StyledTours = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px , 1fr));
      gap: 3rem;
justify-items: center;

  @media (max-width: 1366px) {
    margin: 0 8rem 2rem;
  }
 
    @media (max-width: 1024px) {
    margin: 0 5rem 2rem;
  }
     @media (max-width: 768px) {
    margin: 0 2rem 2rem;
  }
  margin: 0 12rem 2rem;
 

`
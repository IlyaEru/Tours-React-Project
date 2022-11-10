import styled from "styled-components";

export const StyledTourView = styled.article`
display: flex;
flex-direction: column;
background-color: #FFF;
box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
max-width: 1000px;
&:hover{
  box-shadow: 0px 0px 12px 2px #00000040;
}
.tour-img{
    width: 100%;
    height: 20rem;
    object-fit: cover;
}
.tour-content{
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column; 
  flex: 1;
  justify-content: space-between;
      align-items: center;

  .tour-header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: 1rem;
    h2{
      font-size: 1rem;
          font-family: 'Source Sans Pro';
              font-weight: 600;


    }
    .tour-header__price{
          color: #49a6e9;
              background: #ebf7ff;
            padding: 0.25rem 0.5rem;
               border-radius: 0.25rem;
               height: fit-content;



    }
  }
  p{
    color: #617d98;
    font-size: .8rem;
    margin-bottom: 1rem;
  }
  .dots{
    margin-right: .2rem;
  }
  .tour-content__expend-btn{
    border: none;
        color: #49a6e9;
        
  }
  .tour-content__remove-btn{
        color: #bb2525;
        border: 1px solid #bb2525;
        width: 10rem;
        padding: 0.5rem  2rem;
        margin-top: auto;
        &:hover{
          background-color: #bb2525; 
          color: #FFF;
        }
  }
}
`
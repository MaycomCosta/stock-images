import styled from "styled-components"

export const Article = styled.article`
  height: 17.5rem;
  position: relative;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  :hover {
    .photo-info {
        transform: translateY(0);
    }
 }

`

export const ContainerInfo = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  transform: translateY(100%);
  transition: all 0.3s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    
    h4 {
    margin-bottom: 0.5rem;
    line-height: 1.25;
    font-family: "Gill Sans", sans-serif;
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 0;
    font-family: "Gill Sans", sans-serif;
  }

  }

  .user-img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 2rem;
    cursor: pointer;
  }
`
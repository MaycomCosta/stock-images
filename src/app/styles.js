import styled from 'styled-components'

export const ContainerMain = styled.main`

`
export const SectionForm = styled.section`
  padding: 5rem 0 0 0;
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
`
export const Form = styled.form`
  display: flex;

  @media screen and (min-width: 576px) {
    max-width: 1170px;
 }

 input {
    width: 100%;

    padding: 0.75rem 1.25rem;
    border: none;
    text-transform: capitalize;
    outline: none;
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    background: transparent;
    color: hsl(210, 22%, 49%);
    border-bottom: 3px solid hsl(210, 22%, 49%);

    color: white;

    ::placeholder {
        color: white;
    }
 }

 button {
    padding: 0.75rem 1.25rem;
    border: none;
    text-transform: capitalize;
    outline: none;
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
    background: transparent;
    color: hsl(210, 22%, 49%);
    border-bottom: 3px solid hsl(210, 22%, 49%);
    cursor: pointer;

    :hover {
        color: #19466b;
        transition: 0.4s;
    }
 }
`
export const SectionPhotos = styled.section`
  padding: 5rem 0;


  .loading {
   color: white;
   text-align: center;
   padding: 3rem;
  }
`
export const DivCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;

  @media screen and (min-width: 576px) {
   grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
  }
`
// export const Container = styled.div`

// `
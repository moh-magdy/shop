import styled from 'styled-components'

export const ButtnContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05 solid var(--lightBlue);
color:var(--lightBlue);
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.6s ese-in-out;
&:hover{
  background:var(--lightBlue);
  color:var(--mainBlue);
}
&:focus {
  outline:none;
}
`;
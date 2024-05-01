import CardUsuarioRandom from "../cardUsuarioRandom";
import BasicCard from '../utils/BasicCard';
import { Container } from '@mui/material';

export function Home() {
  return (
    <>
     <CardUsuarioRandom />
     <CardUsuarioRandom />
    <Container maxWidth="sm">
    <BasicCard />
    </Container></>
   
  );
}


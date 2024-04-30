import React from 'react';
import CardUsuarioRandom from "../cardUsuaroRandom";
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


import React from "react";

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";

//Se a função for default ela pode ser do tipo anonima
//Forma mais reduzida de uma função
export default _ =>
    <div>
        <h1>Fundamentos React (Arrow)</h1>
        <Card titulo="Desafio Aleatorio">
            <Aleatorio min={10} max={60} />
        </Card>
        <Fragmento />
        <ComParametro
            titulo="Situação aluno..."
            subtitulo="Legal" />
        <Primeiro />
    </div>

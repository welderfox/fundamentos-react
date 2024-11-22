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
        <Card titulo="#4 - Desafio Aleatorio">
            <Aleatorio min={10} max={60} />
        </Card>
        <Card titulo="#3 - Fragmento">
            <Fragmento />
        </Card>
        <Card titulo="#2 - Com Parametro">
            <ComParametro
                titulo="Situação aluno..."
                subtitulo="Legal" />
            <Primeiro />
        </Card>
        <Card titulo="#1 - Primeiro componente">
            <Primeiro />
        </Card>
    </div>

import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

//const el = document.getElementById('root')
ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro
            titulo="segundo component"
            subtitulo="Legal" />
        <Fragmento></Fragmento>
    </div>,
    document.getElementById('root')
)

<?php

namespace src\Interfaces;

interface Alvenaria
{
    public function definirAlvenaria(string $alvenaria): Acabamento|Cobertura;
}
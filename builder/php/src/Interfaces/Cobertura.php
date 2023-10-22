<?php

namespace src\Interfaces;

use src\Casa;

interface Cobertura
{
    public function definirCobertura(string $cobertura): Extras|Casa;
}

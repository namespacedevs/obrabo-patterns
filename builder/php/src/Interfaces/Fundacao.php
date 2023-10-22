<?php

namespace src\Interfaces;

interface Fundacao
{
    public function definirFundacao(string $fundacao): Impermeabilizacao|Alvenaria;
}

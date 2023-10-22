<?php

namespace src\Interfaces;

use src\Casa;

interface Extras
{
    public function definirPiscina(bool $piscina): Extras|Casa;
    public function definirJacuzzi(bool $jazuzzi): Extras|Casa;
    public function definirAdega(bool $adega): Extras|Casa;
}

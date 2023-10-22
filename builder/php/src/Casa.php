<?php

declare(strict_types= 1);

namespace src;

use src\Interfaces\Fundacao;
use src\Interfaces\Impermeabilizacao;
use src\Interfaces\Alvenaria;
use src\Interfaces\Acabamento;
use src\Interfaces\Cobertura;
use src\Interfaces\Extras;

class Casa implements Fundacao, Impermeabilizacao, Alvenaria, Acabamento, Cobertura, Extras
{
    public string $fundacao;
    public bool $impermeabilizacao;
    public string $alvenaria;
    public string $acabamento;
    public string $cobertura;
    public bool $piscina;
    public bool $jacuzzi;
    public bool $adega;
    public static function reset(): Fundacao
    {
        return new Casa();
    }

    public function definirFundacao(string $fundacao): Impermeabilizacao|Alvenaria
    {
        $this->fundacao = $fundacao;
        return $this;
    }

    public function definirImpermeabilizacao(bool $impermeabilizacao): Alvenaria
    {
        $this->impermeabilizacao = $impermeabilizacao;
        return $this;
    }

    public function definirAlvenaria(string $alvenaria): Acabamento|Cobertura
    {
        $this->alvenaria = $alvenaria;
        return $this;
    }

    public function definirAcabamento(string $acabamento): Cobertura
    {
        $this->acabamento = $acabamento;
        return $this;
    }

    public function definirCobertura(string $cobertura): Extras|Casa
    {
        $this->cobertura = $cobertura;
        return $this;
    }

    public function definirPiscina(bool $piscina): Extras|Casa
    {
        $this->piscina = $piscina;
        return $this;
    }

    public function definirJacuzzi(bool $jacuzzi): Extras|Casa
    {
        $this->jacuzzi = $jacuzzi;
        return $this;
    }

    public function definirAdega(bool $adega): Extras|Casa
    {
        $this->adega = $adega;
        return $this;
    }
}

<?php

declare(strict_types= 1);

require_once __DIR__ . '/../vendor/autoload.php';

use src\Casa;

$casaBasica = Casa::reset()
    ->definirFundacao('Alicerce')
    ->definirAlvenaria('Tijolo baiano')
    ->definirCobertura('Telha capa-canal');

$casaMedia = Casa::reset()
    ->definirFundacao('Viga Baldrame')
    ->definirImpermeabilizacao(false)
    ->definirAlvenaria('Bloco estrutural')
    ->definirAcabamento('chapisco-reboco-emboco')
    ->definirCobertura('Telha colonial');

$casaSuperior = Casa::reset()
    ->definirFundacao('Radier')
    ->definirImpermeabilizacao(true)
    ->definirAlvenaria('Steel Frame e Dry-Wall')
    ->definirAcabamento('Porcelanato retificado e polido')
    ->definirCobertura('Telhado sanduiche')
    ->definirPiscina(true)
    ->definirJacuzzi(true)
    ->definirAdega(true);

var_dump($casaBasica);
var_dump($casaMedia);
var_dump($casaSuperior);

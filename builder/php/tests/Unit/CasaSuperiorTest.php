<?php

use src\Casa;

test('casa superior', function () {
    $casaSuperior = Casa::reset()
    ->definirFundacao('Radier')
    ->definirImpermeabilizacao(true)
    ->definirAlvenaria('Steel Frame e Dry-Wall')
    ->definirAcabamento('Porcelanato retificado e polido')
    ->definirCobertura('Telhado sanduiche')
    ->definirPiscina(true)
    ->definirJacuzzi(true)
    ->definirAdega(true);

    expect($casaSuperior)
        ->toBeObject();
    expect($casaSuperior->fundacao)
        ->toBeString()
        ->toBe('Radier');
    expect($casaSuperior->impermeabilizacao)
        ->toBeBool()
        ->toBeTrue();
    expect($casaSuperior->alvenaria)
        ->toBeString()
        ->toBe('Steel Frame e Dry-Wall');
    expect($casaSuperior->acabamento)
        ->toBeString()
        ->toBe('Porcelanato retificado e polido');
    expect($casaSuperior->cobertura)
        ->toBeString()
        ->toBe('Telhado sanduiche');
    expect($casaSuperior->piscina)
        ->toBeTrue();
    expect($casaSuperior->jacuzzi)
        ->toBeTrue();
    expect($casaSuperior->adega)
        ->toBeTrue();
    expect(isset($casaSuperior->impermeabilizacao))
        ->toBeTrue();
    expect(isset($casaSuperior->acabamento))
        ->toBeTrue();
    expect(isset($casaSuperior->piscina))
        ->toBeTrue();
    expect(isset($casaSuperior->jacuzzi))
        ->toBeTrue();
    expect(isset($casaSuperior->adega))
        ->toBeTrue();
});

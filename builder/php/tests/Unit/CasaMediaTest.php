<?php

use src\Casa;

test('casa media', function () {
    $casaMedia = Casa::reset()
    ->definirFundacao('Viga Baldrame')
    ->definirImpermeabilizacao(false)
    ->definirAlvenaria('Bloco estrutural')
    ->definirAcabamento('chapisco-reboco-emboco')
    ->definirCobertura('Telha colonial');

    expect($casaMedia)
        ->toBeObject();
    expect($casaMedia->fundacao)
        ->toBeString()
        ->toBe('Viga Baldrame');
    expect($casaMedia->impermeabilizacao)
        ->toBeBool()
        ->toBeFalse();
    expect($casaMedia->alvenaria)
        ->toBeString()
        ->toBe('Bloco estrutural');
    expect($casaMedia->acabamento)
        ->toBeString()
        ->toBe('chapisco-reboco-emboco');
    expect($casaMedia->cobertura)
        ->toBeString()
        ->toBe('Telha colonial');
    expect(isset($casaMedia->impermeabilizacao))
        ->toBeTrue();
    expect(isset($casaMedia->acabamento))
        ->toBeTrue();
    expect(isset($casaMedia->piscina))
        ->toBeFalse();
    expect(isset($casaMedia->jacuzzi))
        ->toBeFalse();
    expect(isset($casaMedia->adega))
        ->toBeFalse();
});

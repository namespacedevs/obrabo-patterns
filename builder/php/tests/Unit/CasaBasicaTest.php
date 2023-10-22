<?php

use src\Casa;

test('casa basica', function () {
    $casaBasica = Casa::reset()
        ->definirFundacao('Alicerce')
        ->definirAlvenaria('Tijolo baiano')
        ->definirCobertura('Telha capa-canal');

    expect($casaBasica)
        ->toBeObject();
    expect($casaBasica->fundacao)
        ->toBeString()
        ->toBe('Alicerce');
    expect($casaBasica->alvenaria)
        ->toBeString()
        ->toBe('Tijolo baiano');
    expect($casaBasica->cobertura)
        ->toBeString()
        ->toBe('Telha capa-canal');
    expect(isset($casaBasica->impermeabilizacao))
        ->toBeFalse();
    expect(isset($casaBasica->acabamento))
        ->toBeFalse();
    expect(isset($casaBasica->piscina))
        ->toBeFalse();
    expect(isset($casaBasica->jacuzzi))
        ->toBeFalse();
    expect(isset($casaBasica->adega))
        ->toBeFalse();
});

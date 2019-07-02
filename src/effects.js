import * as sagaEffects from 'redux-saga/effects';

export const { call, cancel, join, spawn, take } = sagaEffects;

export const all = sagaEffects.all || (effects => effects);

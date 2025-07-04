/* tslint:disable */
/* eslint-disable */
/**
 * @org/source
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HeartgoldSoulsilver
 */
export interface HeartgoldSoulsilver {
    /**
     * The default depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof HeartgoldSoulsilver
     */
    back_default: string | null;
    /**
     * The shiny depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof HeartgoldSoulsilver
     */
    back_shiny: string | null;
    /**
     * The female depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof HeartgoldSoulsilver
     */
    back_female: string | null;
    /**
     * The default depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof HeartgoldSoulsilver
     */
    front_default: string | null;
    /**
     * The shiny depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof HeartgoldSoulsilver
     */
    front_shiny: string | null;
    /**
     * The shiny female depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof HeartgoldSoulsilver
     */
    back_shiny_female: string | null;
    /**
     * The female depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof HeartgoldSoulsilver
     */
    front_female: string | null;
    /**
     * The shiny female depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof HeartgoldSoulsilver
     */
    front_shiny_female: string | null;
}

/**
 * Check if a given object implements the HeartgoldSoulsilver interface.
 */
export function instanceOfHeartgoldSoulsilver(value: object): value is HeartgoldSoulsilver {
    if (!('back_default' in value) || value['back_default'] === undefined) return false;
    if (!('back_shiny' in value) || value['back_shiny'] === undefined) return false;
    if (!('back_female' in value) || value['back_female'] === undefined) return false;
    if (!('front_default' in value) || value['front_default'] === undefined) return false;
    if (!('front_shiny' in value) || value['front_shiny'] === undefined) return false;
    if (!('back_shiny_female' in value) || value['back_shiny_female'] === undefined) return false;
    if (!('front_female' in value) || value['front_female'] === undefined) return false;
    if (!('front_shiny_female' in value) || value['front_shiny_female'] === undefined) return false;
    return true;
}

export function HeartgoldSoulsilverFromJSON(json: any): HeartgoldSoulsilver {
    return HeartgoldSoulsilverFromJSONTyped(json, false);
}

export function HeartgoldSoulsilverFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartgoldSoulsilver {
    if (json == null) {
        return json;
    }
    return {
        
        'back_default': json['back_default'],
        'back_shiny': json['back_shiny'],
        'back_female': json['back_female'],
        'front_default': json['front_default'],
        'front_shiny': json['front_shiny'],
        'back_shiny_female': json['back_shiny_female'],
        'front_female': json['front_female'],
        'front_shiny_female': json['front_shiny_female'],
    };
}

export function HeartgoldSoulsilverToJSON(json: any): HeartgoldSoulsilver {
    return HeartgoldSoulsilverToJSONTyped(json, false);
}

export function HeartgoldSoulsilverToJSONTyped(value?: HeartgoldSoulsilver | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'back_default': value['back_default'],
        'back_shiny': value['back_shiny'],
        'back_female': value['back_female'],
        'front_default': value['front_default'],
        'front_shiny': value['front_shiny'],
        'back_shiny_female': value['back_shiny_female'],
        'front_female': value['front_female'],
        'front_shiny_female': value['front_shiny_female'],
    };
}


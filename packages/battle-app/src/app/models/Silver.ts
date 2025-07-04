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
 * Silver sprites
 * @export
 * @interface Silver
 */
export interface Silver {
    /**
     * The default depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof Silver
     */
    back_default: string | null;
    /**
     * The shiny depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof Silver
     */
    back_shiny: string | null;
    /**
     * The default depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof Silver
     */
    front_default: string | null;
    /**
     * The shiny depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof Silver
     */
    front_shiny: string | null;
    /**
     * The transparent depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof Silver
     */
    front_transparent: string | null;
}

/**
 * Check if a given object implements the Silver interface.
 */
export function instanceOfSilver(value: object): value is Silver {
    if (!('back_default' in value) || value['back_default'] === undefined) return false;
    if (!('back_shiny' in value) || value['back_shiny'] === undefined) return false;
    if (!('front_default' in value) || value['front_default'] === undefined) return false;
    if (!('front_shiny' in value) || value['front_shiny'] === undefined) return false;
    if (!('front_transparent' in value) || value['front_transparent'] === undefined) return false;
    return true;
}

export function SilverFromJSON(json: any): Silver {
    return SilverFromJSONTyped(json, false);
}

export function SilverFromJSONTyped(json: any, ignoreDiscriminator: boolean): Silver {
    if (json == null) {
        return json;
    }
    return {
        
        'back_default': json['back_default'],
        'back_shiny': json['back_shiny'],
        'front_default': json['front_default'],
        'front_shiny': json['front_shiny'],
        'front_transparent': json['front_transparent'],
    };
}

export function SilverToJSON(json: any): Silver {
    return SilverToJSONTyped(json, false);
}

export function SilverToJSONTyped(value?: Silver | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'back_default': value['back_default'],
        'back_shiny': value['back_shiny'],
        'front_default': value['front_default'],
        'front_shiny': value['front_shiny'],
        'front_transparent': value['front_transparent'],
    };
}


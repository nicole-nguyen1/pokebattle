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
 * Yellow sprites
 * @export
 * @interface Yellow
 */
export interface Yellow {
    /**
     * The default depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof Yellow
     */
    back_default: string | null;
    /**
     * The gray depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof Yellow
     */
    back_gray: string | null;
    /**
     * The transparent depiction of this Pokémon from the back in battle
     * @type {string}
     * @memberof Yellow
     */
    back_transparent: string | null;
    /**
     * The default depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof Yellow
     */
    front_default: string | null;
    /**
     * The gray depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof Yellow
     */
    front_gray: string | null;
    /**
     * The transparent depiction of this Pokémon from the front in battle
     * @type {string}
     * @memberof Yellow
     */
    front_transparent: string | null;
}

/**
 * Check if a given object implements the Yellow interface.
 */
export function instanceOfYellow(value: object): value is Yellow {
    if (!('back_default' in value) || value['back_default'] === undefined) return false;
    if (!('back_gray' in value) || value['back_gray'] === undefined) return false;
    if (!('back_transparent' in value) || value['back_transparent'] === undefined) return false;
    if (!('front_default' in value) || value['front_default'] === undefined) return false;
    if (!('front_gray' in value) || value['front_gray'] === undefined) return false;
    if (!('front_transparent' in value) || value['front_transparent'] === undefined) return false;
    return true;
}

export function YellowFromJSON(json: any): Yellow {
    return YellowFromJSONTyped(json, false);
}

export function YellowFromJSONTyped(json: any, ignoreDiscriminator: boolean): Yellow {
    if (json == null) {
        return json;
    }
    return {
        
        'back_default': json['back_default'],
        'back_gray': json['back_gray'],
        'back_transparent': json['back_transparent'],
        'front_default': json['front_default'],
        'front_gray': json['front_gray'],
        'front_transparent': json['front_transparent'],
    };
}

export function YellowToJSON(json: any): Yellow {
    return YellowToJSONTyped(json, false);
}

export function YellowToJSONTyped(value?: Yellow | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'back_default': value['back_default'],
        'back_gray': value['back_gray'],
        'back_transparent': value['back_transparent'],
        'front_default': value['front_default'],
        'front_gray': value['front_gray'],
        'front_transparent': value['front_transparent'],
    };
}


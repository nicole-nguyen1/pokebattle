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
import type { UltraSunUltraMoon } from './UltraSunUltraMoon';
import {
    UltraSunUltraMoonFromJSON,
    UltraSunUltraMoonFromJSONTyped,
    UltraSunUltraMoonToJSON,
    UltraSunUltraMoonToJSONTyped,
} from './UltraSunUltraMoon';
import type { GenerationViiIcons } from './GenerationViiIcons';
import {
    GenerationViiIconsFromJSON,
    GenerationViiIconsFromJSONTyped,
    GenerationViiIconsToJSON,
    GenerationViiIconsToJSONTyped,
} from './GenerationViiIcons';

/**
 * Generation-VII Sprites
 * @export
 * @interface GenerationVIISprites
 */
export interface GenerationVIISprites {
    /**
     * 
     * @type {GenerationViiIcons}
     * @memberof GenerationVIISprites
     */
    icons: GenerationViiIcons;
    /**
     * 
     * @type {UltraSunUltraMoon}
     * @memberof GenerationVIISprites
     */
    ultra_sun_ultra_moon: UltraSunUltraMoon;
}

/**
 * Check if a given object implements the GenerationVIISprites interface.
 */
export function instanceOfGenerationVIISprites(value: object): value is GenerationVIISprites {
    if (!('icons' in value) || value['icons'] === undefined) return false;
    if (!('ultra_sun_ultra_moon' in value) || value['ultra_sun_ultra_moon'] === undefined) return false;
    return true;
}

export function GenerationVIISpritesFromJSON(json: any): GenerationVIISprites {
    return GenerationVIISpritesFromJSONTyped(json, false);
}

export function GenerationVIISpritesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerationVIISprites {
    if (json == null) {
        return json;
    }
    return {
        
        'icons': GenerationViiIconsFromJSON(json['icons']),
        'ultra_sun_ultra_moon': UltraSunUltraMoonFromJSON(json['ultra-sun-ultra-moon']),
    };
}

export function GenerationVIISpritesToJSON(json: any): GenerationVIISprites {
    return GenerationVIISpritesToJSONTyped(json, false);
}

export function GenerationVIISpritesToJSONTyped(value?: GenerationVIISprites | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'icons': GenerationViiIconsToJSON(value['icons']),
        'ultra-sun-ultra-moon': UltraSunUltraMoonToJSON(value['ultra_sun_ultra_moon']),
    };
}


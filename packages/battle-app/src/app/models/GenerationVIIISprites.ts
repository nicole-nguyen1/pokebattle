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
import type { GenerationViiiIcons } from './GenerationViiiIcons';
import {
    GenerationViiiIconsFromJSON,
    GenerationViiiIconsFromJSONTyped,
    GenerationViiiIconsToJSON,
    GenerationViiiIconsToJSONTyped,
} from './GenerationViiiIcons';

/**
 * Generation-VIII Sprites
 * @export
 * @interface GenerationVIIISprites
 */
export interface GenerationVIIISprites {
    /**
     * 
     * @type {GenerationViiiIcons}
     * @memberof GenerationVIIISprites
     */
    icons: GenerationViiiIcons;
}

/**
 * Check if a given object implements the GenerationVIIISprites interface.
 */
export function instanceOfGenerationVIIISprites(value: object): value is GenerationVIIISprites {
    if (!('icons' in value) || value['icons'] === undefined) return false;
    return true;
}

export function GenerationVIIISpritesFromJSON(json: any): GenerationVIIISprites {
    return GenerationVIIISpritesFromJSONTyped(json, false);
}

export function GenerationVIIISpritesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenerationVIIISprites {
    if (json == null) {
        return json;
    }
    return {
        
        'icons': GenerationViiiIconsFromJSON(json['icons']),
    };
}

export function GenerationVIIISpritesToJSON(json: any): GenerationVIIISprites {
    return GenerationVIIISpritesToJSONTyped(json, false);
}

export function GenerationVIIISpritesToJSONTyped(value?: GenerationVIIISprites | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'icons': GenerationViiiIconsToJSON(value['icons']),
    };
}


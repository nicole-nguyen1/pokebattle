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
import type { NamedAPIResource } from './NamedAPIResource';
import {
    NamedAPIResourceFromJSON,
    NamedAPIResourceFromJSONTyped,
    NamedAPIResourceToJSON,
    NamedAPIResourceToJSONTyped,
} from './NamedAPIResource';

/**
 * The internal id and version of an API resource
 * @export
 * @interface VersionGameIndex
 */
export interface VersionGameIndex {
    /**
     * The internal id of an API resource within game data
     * @type {number}
     * @memberof VersionGameIndex
     */
    game_index: number;
    /**
     * 
     * @type {NamedAPIResource}
     * @memberof VersionGameIndex
     */
    version: NamedAPIResource;
}

/**
 * Check if a given object implements the VersionGameIndex interface.
 */
export function instanceOfVersionGameIndex(value: object): value is VersionGameIndex {
    if (!('game_index' in value) || value['game_index'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function VersionGameIndexFromJSON(json: any): VersionGameIndex {
    return VersionGameIndexFromJSONTyped(json, false);
}

export function VersionGameIndexFromJSONTyped(json: any, ignoreDiscriminator: boolean): VersionGameIndex {
    if (json == null) {
        return json;
    }
    return {
        
        'game_index': json['game_index'],
        'version': NamedAPIResourceFromJSON(json['version']),
    };
}

export function VersionGameIndexToJSON(json: any): VersionGameIndex {
    return VersionGameIndexToJSONTyped(json, false);
}

export function VersionGameIndexToJSONTyped(value?: VersionGameIndex | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'game_index': value['game_index'],
        'version': NamedAPIResourceToJSON(value['version']),
    };
}


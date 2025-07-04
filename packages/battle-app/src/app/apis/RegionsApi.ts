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


import * as runtime from '../runtime';
import type {
  NamedAPIResourceList,
} from '../models/index';
import {
    NamedAPIResourceListFromJSON,
    NamedAPIResourceListToJSON,
} from '../models/index';

/**
 * 
 */
export class RegionsApi extends runtime.BaseAPI {

    /**
     */
    async getRegionsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NamedAPIResourceList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/regions`;

        const response = await this.request({
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NamedAPIResourceListFromJSON(jsonValue));
    }

    /**
     */
    async getRegions(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NamedAPIResourceList> {
        const response = await this.getRegionsRaw(initOverrides);
        return await response.value();
    }

}

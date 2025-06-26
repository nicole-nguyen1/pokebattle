/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import { fetchMiddlewares, KoaTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PokemonController } from './../routes/pokemon/controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { GamesController } from './../routes/games/controller';
import type { Context, Next, Middleware, Request as KRequest, Response as KResponse } from 'koa';
import type * as KoaRouter from '@koa/router';


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "NamedAPIResource": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "url": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PokemonAbility": {
        "dataType": "refObject",
        "properties": {
            "is_hidden": {"dataType":"boolean","required":true},
            "slot": {"dataType":"double","required":true},
            "ability": {"ref":"NamedAPIResource","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PokemonStat": {
        "dataType": "refObject",
        "properties": {
            "stat": {"ref":"NamedAPIResource","required":true},
            "effort": {"dataType":"double","required":true},
            "base_stat": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PokemonType": {
        "dataType": "refObject",
        "properties": {
            "slot": {"dataType":"double","required":true},
            "type": {"ref":"NamedAPIResource","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PokemonMoveVersion": {
        "dataType": "refObject",
        "properties": {
            "move_learn_method": {"ref":"NamedAPIResource","required":true},
            "version_group": {"ref":"NamedAPIResource","required":true},
            "level_learned_at": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PokemonMove": {
        "dataType": "refObject",
        "properties": {
            "move": {"ref":"NamedAPIResource","required":true},
            "version_group_details": {"dataType":"array","array":{"dataType":"refObject","ref":"PokemonMoveVersion"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PokemonMovesByCategory": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"tutor":{"dataType":"array","array":{"dataType":"refObject","ref":"PokemonMove"},"required":true},"machine":{"dataType":"array","array":{"dataType":"refObject","ref":"PokemonMove"},"required":true},"levelUp":{"dataType":"array","array":{"dataType":"refObject","ref":"PokemonMove"},"required":true},"egg":{"dataType":"array","array":{"dataType":"refObject","ref":"PokemonMove"},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PokemonDetails": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"sprites":{"dataType":"nestedObjectLiteral","nestedProperties":{"back_default":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},"front_default":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true}},"required":true},"moves":{"ref":"PokemonMovesByCategory","required":true},"types":{"dataType":"array","array":{"dataType":"refObject","ref":"PokemonType"},"required":true},"stats":{"dataType":"array","array":{"dataType":"refObject","ref":"PokemonStat"},"required":true},"name":{"dataType":"string","required":true},"abilities":{"dataType":"array","array":{"dataType":"refObject","ref":"PokemonAbility"},"required":true},"id":{"dataType":"double","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NamedAPIResourceList": {
        "dataType": "refObject",
        "properties": {
            "count": {"dataType":"double","required":true},
            "next": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "previous": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "results": {"dataType":"array","array":{"dataType":"refObject","ref":"NamedAPIResource"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new KoaTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


export function RegisterRoutes(router: KoaRouter) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


        const argsPokemonController_getPokemon: Record<string, TsoaRoute.ParameterSchema> = {
                versionGroupId: {"in":"query","name":"versionGroupId","required":true,"dataType":"double"},
        };
        router.get('/pokemon',
            ...(fetchMiddlewares<Middleware>(PokemonController)),
            ...(fetchMiddlewares<Middleware>(PokemonController.prototype.getPokemon)),

            async function PokemonController_getPokemon(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsPokemonController_getPokemon, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new PokemonController();

            return templateService.apiHandler({
              methodName: 'getPokemon',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsGamesController_getGames: Record<string, TsoaRoute.ParameterSchema> = {
        };
        router.get('/games',
            ...(fetchMiddlewares<Middleware>(GamesController)),
            ...(fetchMiddlewares<Middleware>(GamesController.prototype.getGames)),

            async function GamesController_getGames(context: Context, next: Next) {

            let validatedArgs: any[] = [];
            try {
              validatedArgs = templateService.getValidatedArgs({ args: argsGamesController_getGames, context, next });
            } catch (err) {
              const error = err as any;
              error.message ||= JSON.stringify({ fields: error.fields });
              context.status = error.status;
              context.throw(context.status, error.message, error);
            }

            const controller = new GamesController();

            return templateService.apiHandler({
              methodName: 'getGames',
              controller,
              context,
              validatedArgs,
              successStatus: undefined,
            });
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

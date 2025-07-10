/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation CreateCar($input: CreateCarInput!) {\n    createCar(input: $input) {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n": typeof types.CreateCarDocument,
    "\n  query GetCars {\n    cars {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n": typeof types.GetCarsDocument,
    "\n  query FilterCars($make: String, $model: String, $year: Int, $color: String) {\n    cars(make: $make, model: $model, year: $year, color: $color) {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n": typeof types.FilterCarsDocument,
};
const documents: Documents = {
    "\n  mutation CreateCar($input: CreateCarInput!) {\n    createCar(input: $input) {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n": types.CreateCarDocument,
    "\n  query GetCars {\n    cars {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n": types.GetCarsDocument,
    "\n  query FilterCars($make: String, $model: String, $year: Int, $color: String) {\n    cars(make: $make, model: $model, year: $year, color: $color) {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n": types.FilterCarsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateCar($input: CreateCarInput!) {\n    createCar(input: $input) {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCar($input: CreateCarInput!) {\n    createCar(input: $input) {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCars {\n    cars {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n"): (typeof documents)["\n  query GetCars {\n    cars {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FilterCars($make: String, $model: String, $year: Int, $color: String) {\n    cars(make: $make, model: $model, year: $year, color: $color) {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n"): (typeof documents)["\n  query FilterCars($make: String, $model: String, $year: Int, $color: String) {\n    cars(make: $make, model: $model, year: $year, color: $color) {\n      id\n      make\n      model\n      year\n      color\n      mobile\n      tablet\n      desktop\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Car = {
  __typename?: 'Car';
  color: Scalars['String']['output'];
  desktop: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  make: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  model: Scalars['String']['output'];
  tablet: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

export type CreateCarInput = {
  color: Scalars['String']['input'];
  desktop: Scalars['String']['input'];
  make: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  model: Scalars['String']['input'];
  tablet: Scalars['String']['input'];
  year: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCar: Car;
};


export type MutationCreateCarArgs = {
  input: CreateCarInput;
};

export type Query = {
  __typename?: 'Query';
  cars: Array<Car>;
};


export type QueryCarsArgs = {
  color?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateCarMutationVariables = Exact<{
  input: CreateCarInput;
}>;


export type CreateCarMutation = { __typename?: 'Mutation', createCar: { __typename?: 'Car', id: string, make: string, model: string, year: number, color: string, mobile: string, tablet: string, desktop: string } };

export type GetCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCarsQuery = { __typename?: 'Query', cars: Array<{ __typename?: 'Car', id: string, make: string, model: string, year: number, color: string, mobile: string, tablet: string, desktop: string }> };

export type FilterCarsQueryVariables = Exact<{
  make?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
}>;


export type FilterCarsQuery = { __typename?: 'Query', cars: Array<{ __typename?: 'Car', id: string, make: string, model: string, year: number, color: string, mobile: string, tablet: string, desktop: string }> };


export const CreateCarDocument = gql`
    mutation CreateCar($input: CreateCarInput!) {
  createCar(input: $input) {
    id
    make
    model
    year
    color
    mobile
    tablet
    desktop
  }
}
    `;
export type CreateCarMutationFn = Apollo.MutationFunction<CreateCarMutation, CreateCarMutationVariables>;

/**
 * __useCreateCarMutation__
 *
 * To run a mutation, you first call `useCreateCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarMutation, { data, loading, error }] = useCreateCarMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCarMutation(baseOptions?: Apollo.MutationHookOptions<CreateCarMutation, CreateCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCarMutation, CreateCarMutationVariables>(CreateCarDocument, options);
      }
export type CreateCarMutationHookResult = ReturnType<typeof useCreateCarMutation>;
export type CreateCarMutationResult = Apollo.MutationResult<CreateCarMutation>;
export type CreateCarMutationOptions = Apollo.BaseMutationOptions<CreateCarMutation, CreateCarMutationVariables>;
export const GetCarsDocument = gql`
    query GetCars {
  cars {
    id
    make
    model
    year
    color
    mobile
    tablet
    desktop
  }
}
    `;

/**
 * __useGetCarsQuery__
 *
 * To run a query within a React component, call `useGetCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCarsQuery(baseOptions?: Apollo.QueryHookOptions<GetCarsQuery, GetCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options);
      }
export function useGetCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarsQuery, GetCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options);
        }
export function useGetCarsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCarsQuery, GetCarsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options);
        }
export type GetCarsQueryHookResult = ReturnType<typeof useGetCarsQuery>;
export type GetCarsLazyQueryHookResult = ReturnType<typeof useGetCarsLazyQuery>;
export type GetCarsSuspenseQueryHookResult = ReturnType<typeof useGetCarsSuspenseQuery>;
export type GetCarsQueryResult = Apollo.QueryResult<GetCarsQuery, GetCarsQueryVariables>;
export const FilterCarsDocument = gql`
    query FilterCars($make: String, $model: String, $year: Int, $color: String) {
  cars(make: $make, model: $model, year: $year, color: $color) {
    id
    make
    model
    year
    color
    mobile
    tablet
    desktop
  }
}
    `;

/**
 * __useFilterCarsQuery__
 *
 * To run a query within a React component, call `useFilterCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterCarsQuery({
 *   variables: {
 *      make: // value for 'make'
 *      model: // value for 'model'
 *      year: // value for 'year'
 *      color: // value for 'color'
 *   },
 * });
 */
export function useFilterCarsQuery(baseOptions?: Apollo.QueryHookOptions<FilterCarsQuery, FilterCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterCarsQuery, FilterCarsQueryVariables>(FilterCarsDocument, options);
      }
export function useFilterCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterCarsQuery, FilterCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterCarsQuery, FilterCarsQueryVariables>(FilterCarsDocument, options);
        }
export function useFilterCarsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FilterCarsQuery, FilterCarsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FilterCarsQuery, FilterCarsQueryVariables>(FilterCarsDocument, options);
        }
export type FilterCarsQueryHookResult = ReturnType<typeof useFilterCarsQuery>;
export type FilterCarsLazyQueryHookResult = ReturnType<typeof useFilterCarsLazyQuery>;
export type FilterCarsSuspenseQueryHookResult = ReturnType<typeof useFilterCarsSuspenseQuery>;
export type FilterCarsQueryResult = Apollo.QueryResult<FilterCarsQuery, FilterCarsQueryVariables>;
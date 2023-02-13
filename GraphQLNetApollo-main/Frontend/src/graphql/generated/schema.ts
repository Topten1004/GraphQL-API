import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type Engine = {
  __typename?: 'Engine';
  id: Scalars['Int'];
  isp: Scalars['Int'];
  name: Scalars['String'];
  rocketId: Scalars['Int'];
  thrust: Scalars['Int'];
  type: EngineType;
};

export type EngineFilterInput = {
  and?: InputMaybe<Array<EngineFilterInput>>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isp?: InputMaybe<ComparableInt32OperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<EngineFilterInput>>;
  rocketId?: InputMaybe<ComparableInt32OperationFilterInput>;
  thrust?: InputMaybe<ComparableInt32OperationFilterInput>;
  type?: InputMaybe<EngineTypeOperationFilterInput>;
};

export enum EngineType {
  SeaLevel = 'SEA_LEVEL',
  Vacuum = 'VACUUM'
}

export type EngineTypeOperationFilterInput = {
  eq?: InputMaybe<EngineType>;
  in?: InputMaybe<Array<EngineType>>;
  neq?: InputMaybe<EngineType>;
  nin?: InputMaybe<Array<EngineType>>;
};

export type ListFilterInputTypeOfEngineFilterInput = {
  all?: InputMaybe<EngineFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<EngineFilterInput>;
  some?: InputMaybe<EngineFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  engines: Array<Engine>;
  rockets: Array<Rocket>;
};


export type QueryEnginesArgs = {
  where?: InputMaybe<EngineFilterInput>;
};


export type QueryRocketsArgs = {
  where?: InputMaybe<RocketFilterInput>;
};

export type Rocket = {
  __typename?: 'Rocket';
  engines: Array<Engine>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type RocketFilterInput = {
  and?: InputMaybe<Array<RocketFilterInput>>;
  engines?: InputMaybe<ListFilterInputTypeOfEngineFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<RocketFilterInput>>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type GetEnginesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEnginesQuery = { __typename?: 'Query', rockets: Array<{ __typename?: 'Rocket', id: number, name: string }> };


export const GetEnginesDocument = gql`
    query GetEngines {
  rockets {
    id
    name
  }
}
    `;

/**
 * __useGetEnginesQuery__
 *
 * To run a query within a React component, call `useGetEnginesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnginesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnginesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEnginesQuery(baseOptions?: Apollo.QueryHookOptions<GetEnginesQuery, GetEnginesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEnginesQuery, GetEnginesQueryVariables>(GetEnginesDocument, options);
      }
export function useGetEnginesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEnginesQuery, GetEnginesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEnginesQuery, GetEnginesQueryVariables>(GetEnginesDocument, options);
        }
export type GetEnginesQueryHookResult = ReturnType<typeof useGetEnginesQuery>;
export type GetEnginesLazyQueryHookResult = ReturnType<typeof useGetEnginesLazyQuery>;
export type GetEnginesQueryResult = Apollo.QueryResult<GetEnginesQuery, GetEnginesQueryVariables>;
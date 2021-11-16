import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type DealershipOrganization = {
  __typename?: 'DealershipOrganization';
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  default_dealer_number?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  rootUser?: Maybe<DealershipRootUser>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddressTwo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  zip?: Maybe<Scalars['String']>;
};

export type DealershipRootUser = {
  __typename?: 'DealershipRootUser';
  createdAt: Scalars['String'];
  dealershipOrganization: DealershipOrganization;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteRootUser: Scalars['Boolean'];
  login: DealershipRootUser;
  registerRootUser: DealershipRootUser;
  updateDealerOrg: DealershipOrganization;
};


export type MutationDeleteRootUserArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  login: UserLogin;
};


export type MutationRegisterRootUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateDealerOrgArgs = {
  city?: Maybe<Scalars['String']>;
  default_dealer_number?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  org_id: Scalars['Float'];
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddressTwo?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllRootUsers: Array<DealershipRootUser>;
  me: DealershipRootUser;
};

export type UserLogin = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  userLogin: UserLogin;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'DealershipRootUser', id: string, firstName: string, lastName: string, email: string, username: string, createdAt: string, updatedAt: string, dealershipOrganization: { __typename?: 'DealershipOrganization', id: string } } };


export const LoginDocument = gql`
    mutation Login($userLogin: UserLogin!) {
  login(login: $userLogin) {
    id
    firstName
    lastName
    email
    username
    dealershipOrganization {
      id
    }
    createdAt
    updatedAt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      userLogin: // value for 'userLogin'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
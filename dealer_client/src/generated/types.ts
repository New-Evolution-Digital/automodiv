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

export type DealershipDoor = {
  __typename?: 'DealershipDoor';
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  dealerNumber?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddressTwo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  zip?: Maybe<Scalars['String']>;
};

export type DealershipOrganization = {
  __typename?: 'DealershipOrganization';
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  dealershipDoors?: Maybe<Array<DealershipDoor>>;
  default_dealer_number?: Maybe<Scalars['String']>;
  employees: Array<DealershipUser>;
  id: Scalars['ID'];
  key: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddressTwo?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  zip?: Maybe<Scalars['String']>;
};

export type DealershipUser = {
  __typename?: 'DealershipUser';
  createdAt: Scalars['String'];
  dealershipOrganization: DealershipOrganization;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type InputNewUser = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addEmployeeByOrgKey: DealershipUser;
  createDoor: DealershipDoor;
  deleteRootUser: Scalars['Boolean'];
  login: DealershipUser;
  registerRootUser: DealershipUser;
  updateDealerOrg: DealershipOrganization;
  updateDoorById?: Maybe<DealershipDoor>;
};


export type MutationAddEmployeeByOrgKeyArgs = {
  credentials: InputNewUser;
  employeeRole: Scalars['String'];
  key: Scalars['String'];
};


export type MutationCreateDoorArgs = {
  doorParams: DoorInputParams;
  key: Scalars['String'];
};


export type MutationDeleteRootUserArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  login: UserLogin;
};


export type MutationRegisterRootUserArgs = {
  credentials: InputNewUser;
};


export type MutationUpdateDealerOrgArgs = {
  dealerKey: Scalars['String'];
  organizationInput: OrganizationInput;
};


export type MutationUpdateDoorByIdArgs = {
  doorId: Scalars['ID'];
  doorParameters: DoorInputParams;
};

export type OrganizationInput = {
  city?: Maybe<Scalars['String']>;
  default_dealer_number?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddressTwo?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllRootUsers: Array<DealershipUser>;
  getDealershipOrgById: DealershipOrganization;
  getDoorsByOrgId: Array<DealershipDoor>;
  getEmployeesByOrgKey?: Maybe<Array<DealershipUser>>;
  me: DealershipUser;
};


export type QueryGetDoorsByOrgIdArgs = {
  orgCredentials: OrgIndexables;
};


export type QueryGetEmployeesByOrgKeyArgs = {
  key: Scalars['String'];
};

export type UserLogin = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type DoorInputParams = {
  city?: Maybe<Scalars['String']>;
  dealerNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddressTwo?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type OrgIndexables = {
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
};

export type CreateDoorMutationVariables = Exact<{
  key: Scalars['String'];
  DoorParams: DoorInputParams;
}>;


export type CreateDoorMutation = { __typename?: 'Mutation', createDoor: { __typename?: 'DealershipDoor', id: number, createdAt: string, updatedAt: string, name?: string | null | undefined, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, dealerNumber?: string | null | undefined } };

export type GetDoorsByOrgIdQueryVariables = Exact<{
  OrgCredenials: OrgIndexables;
}>;


export type GetDoorsByOrgIdQuery = { __typename?: 'Query', getDoorsByOrgId: Array<{ __typename?: 'DealershipDoor', id: number, createdAt: string, updatedAt: string, name?: string | null | undefined, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, dealerNumber?: string | null | undefined }> };

export type UpdateDealerOrgMutationVariables = Exact<{
  DealerKey: Scalars['String'];
  OrganizationInput: OrganizationInput;
}>;


export type UpdateDealerOrgMutation = { __typename?: 'Mutation', updateDealerOrg: { __typename?: 'DealershipOrganization', id: string, key: string, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, name?: string | null | undefined, default_dealer_number?: string | null | undefined, createdAt: string, updatedAt: string, employees: Array<{ __typename?: 'DealershipUser', id: string, firstName: string, lastName: string, username: string, role: string }> } };

export type RegisterRootUserMutationVariables = Exact<{
  credentials: InputNewUser;
}>;


export type RegisterRootUserMutation = { __typename?: 'Mutation', registerRootUser: { __typename?: 'DealershipUser', id: string, firstName: string, lastName: string, username: string, email: string, createdAt: string, updatedAt: string, dealershipOrganization: { __typename?: 'DealershipOrganization', id: string, key: string } } };

export type LoginMutationVariables = Exact<{
  userLogin: UserLogin;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'DealershipUser', id: string, firstName: string, lastName: string, email: string, username: string, createdAt: string, updatedAt: string, dealershipOrganization: { __typename?: 'DealershipOrganization', id: string, key: string, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, name?: string | null | undefined, default_dealer_number?: string | null | undefined, updatedAt: string, createdAt: string, employees: Array<{ __typename?: 'DealershipUser', id: string, firstName: string, lastName: string }> } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'DealershipUser', username: string, dealershipOrganization: { __typename?: 'DealershipOrganization', id: string, key: string, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, name?: string | null | undefined, default_dealer_number?: string | null | undefined, createdAt: string, updatedAt: string } } };


export const CreateDoorDocument = gql`
    mutation CreateDoor($key: String!, $DoorParams: doorInputParams!) {
  createDoor(doorParams: $DoorParams, key: $key) {
    id
    createdAt
    updatedAt
    name
    streetAddress
    streetAddressTwo
    city
    state
    zip
    dealerNumber
  }
}
    `;
export type CreateDoorMutationFn = Apollo.MutationFunction<CreateDoorMutation, CreateDoorMutationVariables>;

/**
 * __useCreateDoorMutation__
 *
 * To run a mutation, you first call `useCreateDoorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDoorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDoorMutation, { data, loading, error }] = useCreateDoorMutation({
 *   variables: {
 *      key: // value for 'key'
 *      DoorParams: // value for 'DoorParams'
 *   },
 * });
 */
export function useCreateDoorMutation(baseOptions?: Apollo.MutationHookOptions<CreateDoorMutation, CreateDoorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDoorMutation, CreateDoorMutationVariables>(CreateDoorDocument, options);
      }
export type CreateDoorMutationHookResult = ReturnType<typeof useCreateDoorMutation>;
export type CreateDoorMutationResult = Apollo.MutationResult<CreateDoorMutation>;
export type CreateDoorMutationOptions = Apollo.BaseMutationOptions<CreateDoorMutation, CreateDoorMutationVariables>;
export const GetDoorsByOrgIdDocument = gql`
    query GetDoorsByOrgId($OrgCredenials: orgIndexables!) {
  getDoorsByOrgId(orgCredentials: $OrgCredenials) {
    id
    createdAt
    updatedAt
    name
    streetAddress
    streetAddressTwo
    city
    state
    zip
    dealerNumber
  }
}
    `;

/**
 * __useGetDoorsByOrgIdQuery__
 *
 * To run a query within a React component, call `useGetDoorsByOrgIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoorsByOrgIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoorsByOrgIdQuery({
 *   variables: {
 *      OrgCredenials: // value for 'OrgCredenials'
 *   },
 * });
 */
export function useGetDoorsByOrgIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoorsByOrgIdQuery, GetDoorsByOrgIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoorsByOrgIdQuery, GetDoorsByOrgIdQueryVariables>(GetDoorsByOrgIdDocument, options);
      }
export function useGetDoorsByOrgIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoorsByOrgIdQuery, GetDoorsByOrgIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoorsByOrgIdQuery, GetDoorsByOrgIdQueryVariables>(GetDoorsByOrgIdDocument, options);
        }
export type GetDoorsByOrgIdQueryHookResult = ReturnType<typeof useGetDoorsByOrgIdQuery>;
export type GetDoorsByOrgIdLazyQueryHookResult = ReturnType<typeof useGetDoorsByOrgIdLazyQuery>;
export type GetDoorsByOrgIdQueryResult = Apollo.QueryResult<GetDoorsByOrgIdQuery, GetDoorsByOrgIdQueryVariables>;
export const UpdateDealerOrgDocument = gql`
    mutation UpdateDealerOrg($DealerKey: String!, $OrganizationInput: OrganizationInput!) {
  updateDealerOrg(dealerKey: $DealerKey, organizationInput: $OrganizationInput) {
    id
    key
    streetAddress
    streetAddressTwo
    city
    state
    zip
    name
    default_dealer_number
    createdAt
    updatedAt
    employees {
      id
      firstName
      lastName
      username
      role
    }
  }
}
    `;
export type UpdateDealerOrgMutationFn = Apollo.MutationFunction<UpdateDealerOrgMutation, UpdateDealerOrgMutationVariables>;

/**
 * __useUpdateDealerOrgMutation__
 *
 * To run a mutation, you first call `useUpdateDealerOrgMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDealerOrgMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDealerOrgMutation, { data, loading, error }] = useUpdateDealerOrgMutation({
 *   variables: {
 *      DealerKey: // value for 'DealerKey'
 *      OrganizationInput: // value for 'OrganizationInput'
 *   },
 * });
 */
export function useUpdateDealerOrgMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDealerOrgMutation, UpdateDealerOrgMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDealerOrgMutation, UpdateDealerOrgMutationVariables>(UpdateDealerOrgDocument, options);
      }
export type UpdateDealerOrgMutationHookResult = ReturnType<typeof useUpdateDealerOrgMutation>;
export type UpdateDealerOrgMutationResult = Apollo.MutationResult<UpdateDealerOrgMutation>;
export type UpdateDealerOrgMutationOptions = Apollo.BaseMutationOptions<UpdateDealerOrgMutation, UpdateDealerOrgMutationVariables>;
export const RegisterRootUserDocument = gql`
    mutation RegisterRootUser($credentials: InputNewUser!) {
  registerRootUser(credentials: $credentials) {
    id
    firstName
    lastName
    username
    email
    createdAt
    updatedAt
    dealershipOrganization {
      id
      key
    }
  }
}
    `;
export type RegisterRootUserMutationFn = Apollo.MutationFunction<RegisterRootUserMutation, RegisterRootUserMutationVariables>;

/**
 * __useRegisterRootUserMutation__
 *
 * To run a mutation, you first call `useRegisterRootUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterRootUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerRootUserMutation, { data, loading, error }] = useRegisterRootUserMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useRegisterRootUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterRootUserMutation, RegisterRootUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterRootUserMutation, RegisterRootUserMutationVariables>(RegisterRootUserDocument, options);
      }
export type RegisterRootUserMutationHookResult = ReturnType<typeof useRegisterRootUserMutation>;
export type RegisterRootUserMutationResult = Apollo.MutationResult<RegisterRootUserMutation>;
export type RegisterRootUserMutationOptions = Apollo.BaseMutationOptions<RegisterRootUserMutation, RegisterRootUserMutationVariables>;
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
      key
      streetAddress
      streetAddressTwo
      city
      state
      zip
      name
      default_dealer_number
      updatedAt
      createdAt
      employees {
        id
        firstName
        lastName
      }
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
export const MeDocument = gql`
    query Me {
  me {
    username
    dealershipOrganization {
      id
      key
      streetAddress
      streetAddressTwo
      city
      state
      zip
      name
      default_dealer_number
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
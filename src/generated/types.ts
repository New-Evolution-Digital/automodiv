import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type AddVehicleInput = {
  manual?: InputMaybe<VehicleSearchInput>;
  vin?: InputMaybe<Scalars['String']>;
};

export type AuthUserReturn = {
  __typename?: 'AuthUserReturn';
  data: DealershipUser;
  jwt: Scalars['String'];
};

export type CarInventory = {
  __typename?: 'CarInventory';
  dealership_org: DealershipOrganization;
  id: Scalars['ID'];
  make?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  series?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  transmission?: Maybe<Scalars['String']>;
  trim?: Maybe<Scalars['String']>;
  vin?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Float']>;
};

export type DealershipDoor = {
  __typename?: 'DealershipDoor';
  city?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  dealerNumber?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
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
  getInventory?: Maybe<Array<InventoryTypes>>;
  id: Scalars['ID'];
  key: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
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
  phone_number?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type DoorInventory = {
  __typename?: 'DoorInventory';
  dealership: DealershipDoor;
  inventory?: Maybe<Array<CarInventory>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  code?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type InputNewUser = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

export type InventoryTypes = CarInventory;

export type Mutation = {
  __typename?: 'Mutation';
  addCarToDealership: CarInventory;
  addEmployeeByOrgKey: DealershipUser;
  createDoor: DealershipDoor;
  deleteCar: Scalars['Boolean'];
  deleteRootUser: Scalars['Boolean'];
  login: UserAuthReturn;
  quickAddCar: CarInventory;
  registerRootUser: SignUpReturn;
  updateDealerOrg: DealershipOrganization;
  updateDoorById?: Maybe<DealershipDoor>;
  updateEmployeeById: DealershipUser;
};


export type MutationAddCarToDealershipArgs = {
  dealership_id: Scalars['Int'];
  vin: Scalars['String'];
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


export type MutationDeleteCarArgs = {
  car_id: Scalars['Int'];
};


export type MutationDeleteRootUserArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  login: UserLogin;
};


export type MutationQuickAddCarArgs = {
  details: AddVehicleInput;
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


export type MutationUpdateEmployeeByIdArgs = {
  updatedUser: UpdateUser;
};

export type OrganizationInput = {
  city?: InputMaybe<Scalars['String']>;
  default_dealer_number?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  streetAddressTwo?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllRootUsers: Array<DealershipUser>;
  getAvailableMakes: Array<Scalars['String']>;
  getDealershipOrgById: DealershipOrganization;
  getDoorById: DealershipDoor;
  getDoorsByOrgId: Array<DealershipDoor>;
  getEmployeeById?: Maybe<DealershipUser>;
  getEmployeesByOrgKey?: Maybe<Array<DealershipUser>>;
  getInventory: DoorInventory;
  getModelsWithYearMake: Array<Scalars['String']>;
  hello: Scalars['String'];
  me: DealershipUser;
  searchVin?: Maybe<CarInventory>;
};


export type QueryGetDoorByIdArgs = {
  doorId: Scalars['Int'];
  orgCredentials: OrgIndexables;
};


export type QueryGetDoorsByOrgIdArgs = {
  orgCredentials: OrgIndexables;
};


export type QueryGetEmployeeByIdArgs = {
  employeeId: Scalars['ID'];
  orgKey: Scalars['String'];
};


export type QueryGetEmployeesByOrgKeyArgs = {
  key: Scalars['String'];
};


export type QueryGetInventoryArgs = {
  door_id: Scalars['Int'];
};


export type QueryGetModelsWithYearMakeArgs = {
  make: Scalars['String'];
  year: Scalars['String'];
};


export type QuerySearchVinArgs = {
  vin: Scalars['String'];
};

export type SignUpReturn = {
  __typename?: 'SignUpReturn';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<AuthUserReturn>;
};

export type UpdateUser = {
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

export type UserAuthReturn = {
  __typename?: 'UserAuthReturn';
  jwt: Scalars['String'];
  user: DealershipUser;
};

export type UserLogin = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
};

export type VehicleSearchInput = {
  make: Scalars['String'];
  model: Scalars['String'];
  year: Scalars['String'];
};

export type DoorInputParams = {
  city?: InputMaybe<Scalars['String']>;
  dealerNumber?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  streetAddressTwo?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type OrgIndexables = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
};

export type CreateDoorMutationVariables = Exact<{
  key: Scalars['String'];
  DoorParams: DoorInputParams;
}>;


export type CreateDoorMutation = { __typename?: 'Mutation', createDoor: { __typename?: 'DealershipDoor', id: number, createdAt: string, updatedAt: string, name?: string | null | undefined, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, dealerNumber?: string | null | undefined } };

export type GetDoorByIdQueryVariables = Exact<{
  doorId: Scalars['Int'];
  orgCredentials: OrgIndexables;
}>;


export type GetDoorByIdQuery = { __typename?: 'Query', getDoorById: { __typename?: 'DealershipDoor', id: number, createdAt: string, updatedAt: string, name?: string | null | undefined, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, dealerNumber?: string | null | undefined } };

export type GetDoorsByOrgIdQueryVariables = Exact<{
  OrgCredenials: OrgIndexables;
}>;


export type GetDoorsByOrgIdQuery = { __typename?: 'Query', getDoorsByOrgId: Array<{ __typename?: 'DealershipDoor', id: number, createdAt: string, updatedAt: string, name?: string | null | undefined, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, dealerNumber?: string | null | undefined }> };

export type GetEmployeeByOrgKeyQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type GetEmployeeByOrgKeyQuery = { __typename?: 'Query', getEmployeesByOrgKey?: Array<{ __typename?: 'DealershipUser', id: string, firstName: string, lastName: string, username: string, email: string, role: string, createdAt: string, updatedAt: string }> | null | undefined };

export type UpdateDealerOrgMutationVariables = Exact<{
  DealerKey: Scalars['String'];
  OrganizationInput: OrganizationInput;
}>;


export type UpdateDealerOrgMutation = { __typename?: 'Mutation', updateDealerOrg: { __typename?: 'DealershipOrganization', id: string, key: string, streetAddress?: string | null | undefined, streetAddressTwo?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, name?: string | null | undefined, default_dealer_number?: string | null | undefined, createdAt: string, updatedAt: string, employees: Array<{ __typename?: 'DealershipUser', id: string, firstName: string, lastName: string, username: string, role: string }> } };

export type GetAvailableMakesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvailableMakesQuery = { __typename?: 'Query', getAvailableMakes: Array<string> };

export type GetModelsQueryVariables = Exact<{
  year: Scalars['String'];
  make: Scalars['String'];
}>;


export type GetModelsQuery = { __typename?: 'Query', getModelsWithYearMake: Array<string> };

export type GetOrgInventoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrgInventoryQuery = { __typename?: 'Query', me: { __typename?: 'DealershipUser', dealershipOrganization: { __typename?: 'DealershipOrganization', getInventory?: Array<{ __typename: 'CarInventory', id: string, vin?: string | null | undefined, year?: number | null | undefined, make?: string | null | undefined, model?: string | null | undefined, trim?: string | null | undefined, series?: string | null | undefined, transmission?: string | null | undefined, status?: string | null | undefined }> | null | undefined } } };

export type QuickAddCarMutationVariables = Exact<{
  details: AddVehicleInput;
}>;


export type QuickAddCarMutation = { __typename?: 'Mutation', quickAddCar: { __typename?: 'CarInventory', id: string, vin?: string | null | undefined, year?: number | null | undefined, make?: string | null | undefined, model?: string | null | undefined, series?: string | null | undefined, transmission?: string | null | undefined } };

export type SearchVinQueryVariables = Exact<{
  vin: Scalars['String'];
}>;


export type SearchVinQuery = { __typename?: 'Query', searchVin?: { __typename?: 'CarInventory', vin?: string | null | undefined, year?: number | null | undefined, make?: string | null | undefined, model?: string | null | undefined, trim?: string | null | undefined, series?: string | null | undefined, transmission?: string | null | undefined } | null | undefined };

export type AddEmployeeByOrgKeyMutationVariables = Exact<{
  EmployeeRole: Scalars['String'];
  Credentials: InputNewUser;
  Key: Scalars['String'];
}>;


export type AddEmployeeByOrgKeyMutation = { __typename?: 'Mutation', addEmployeeByOrgKey: { __typename?: 'DealershipUser', id: string, firstName: string, lastName: string, username: string, email: string, createdAt: string, updatedAt: string } };

export type GetEmployeeByIdQueryVariables = Exact<{
  EmployeeId: Scalars['ID'];
  OrgKey: Scalars['String'];
}>;


export type GetEmployeeByIdQuery = { __typename?: 'Query', getEmployeeById?: { __typename?: 'DealershipUser', id: string, firstName: string, lastName: string, username: string, email: string, role: string, createdAt: string, updatedAt: string } | null | undefined };

export type LoginMutationVariables = Exact<{
  login: UserLogin;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserAuthReturn', jwt: string, user: { __typename?: 'DealershipUser', id: string, dealershipOrganization: { __typename?: 'DealershipOrganization', key: string } } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'DealershipUser', id: string, firstName: string, lastName: string, username: string, email: string, role: string, phone_number?: string | null | undefined, createdAt: string, updatedAt: string, dealershipOrganization: { __typename?: 'DealershipOrganization', key: string, streetAddress?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, name?: string | null | undefined, phone_number?: string | null | undefined, default_dealer_number?: string | null | undefined, getInventory?: Array<{ __typename?: 'CarInventory', id: string, vin?: string | null | undefined, year?: number | null | undefined, make?: string | null | undefined, model?: string | null | undefined, trim?: string | null | undefined, series?: string | null | undefined, transmission?: string | null | undefined }> | null | undefined, dealershipDoors?: Array<{ __typename?: 'DealershipDoor', id: number, createdAt: string, updatedAt: string, name?: string | null | undefined, streetAddress?: string | null | undefined, city?: string | null | undefined, state?: string | null | undefined, zip?: string | null | undefined, dealerNumber?: string | null | undefined, phone_number?: string | null | undefined }> | null | undefined } } };

export type RegisterRootUserMutationVariables = Exact<{
  credentials: InputNewUser;
}>;


export type RegisterRootUserMutation = { __typename?: 'Mutation', registerRootUser: { __typename?: 'SignUpReturn', errors?: Array<{ __typename?: 'FieldError', message?: string | null | undefined, field?: string | null | undefined, code?: string | null | undefined }> | null | undefined, user?: { __typename?: 'AuthUserReturn', jwt: string, data: { __typename?: 'DealershipUser', dealershipOrganization: { __typename?: 'DealershipOrganization', key: string } } } | null | undefined } };


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
export const GetDoorByIdDocument = gql`
    query GetDoorById($doorId: Int!, $orgCredentials: orgIndexables!) {
  getDoorById(doorId: $doorId, orgCredentials: $orgCredentials) {
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
 * __useGetDoorByIdQuery__
 *
 * To run a query within a React component, call `useGetDoorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoorByIdQuery({
 *   variables: {
 *      doorId: // value for 'doorId'
 *      orgCredentials: // value for 'orgCredentials'
 *   },
 * });
 */
export function useGetDoorByIdQuery(baseOptions: Apollo.QueryHookOptions<GetDoorByIdQuery, GetDoorByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoorByIdQuery, GetDoorByIdQueryVariables>(GetDoorByIdDocument, options);
      }
export function useGetDoorByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoorByIdQuery, GetDoorByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoorByIdQuery, GetDoorByIdQueryVariables>(GetDoorByIdDocument, options);
        }
export type GetDoorByIdQueryHookResult = ReturnType<typeof useGetDoorByIdQuery>;
export type GetDoorByIdLazyQueryHookResult = ReturnType<typeof useGetDoorByIdLazyQuery>;
export type GetDoorByIdQueryResult = Apollo.QueryResult<GetDoorByIdQuery, GetDoorByIdQueryVariables>;
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
export const GetEmployeeByOrgKeyDocument = gql`
    query GetEmployeeByOrgKey($key: String!) {
  getEmployeesByOrgKey(key: $key) {
    id
    firstName
    lastName
    username
    email
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetEmployeeByOrgKeyQuery__
 *
 * To run a query within a React component, call `useGetEmployeeByOrgKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeeByOrgKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeeByOrgKeyQuery({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useGetEmployeeByOrgKeyQuery(baseOptions: Apollo.QueryHookOptions<GetEmployeeByOrgKeyQuery, GetEmployeeByOrgKeyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmployeeByOrgKeyQuery, GetEmployeeByOrgKeyQueryVariables>(GetEmployeeByOrgKeyDocument, options);
      }
export function useGetEmployeeByOrgKeyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeeByOrgKeyQuery, GetEmployeeByOrgKeyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmployeeByOrgKeyQuery, GetEmployeeByOrgKeyQueryVariables>(GetEmployeeByOrgKeyDocument, options);
        }
export type GetEmployeeByOrgKeyQueryHookResult = ReturnType<typeof useGetEmployeeByOrgKeyQuery>;
export type GetEmployeeByOrgKeyLazyQueryHookResult = ReturnType<typeof useGetEmployeeByOrgKeyLazyQuery>;
export type GetEmployeeByOrgKeyQueryResult = Apollo.QueryResult<GetEmployeeByOrgKeyQuery, GetEmployeeByOrgKeyQueryVariables>;
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
export const GetAvailableMakesDocument = gql`
    query GetAvailableMakes {
  getAvailableMakes
}
    `;

/**
 * __useGetAvailableMakesQuery__
 *
 * To run a query within a React component, call `useGetAvailableMakesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvailableMakesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvailableMakesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAvailableMakesQuery(baseOptions?: Apollo.QueryHookOptions<GetAvailableMakesQuery, GetAvailableMakesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvailableMakesQuery, GetAvailableMakesQueryVariables>(GetAvailableMakesDocument, options);
      }
export function useGetAvailableMakesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvailableMakesQuery, GetAvailableMakesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvailableMakesQuery, GetAvailableMakesQueryVariables>(GetAvailableMakesDocument, options);
        }
export type GetAvailableMakesQueryHookResult = ReturnType<typeof useGetAvailableMakesQuery>;
export type GetAvailableMakesLazyQueryHookResult = ReturnType<typeof useGetAvailableMakesLazyQuery>;
export type GetAvailableMakesQueryResult = Apollo.QueryResult<GetAvailableMakesQuery, GetAvailableMakesQueryVariables>;
export const GetModelsDocument = gql`
    query GetModels($year: String!, $make: String!) {
  getModelsWithYearMake(year: $year, make: $make)
}
    `;

/**
 * __useGetModelsQuery__
 *
 * To run a query within a React component, call `useGetModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModelsQuery({
 *   variables: {
 *      year: // value for 'year'
 *      make: // value for 'make'
 *   },
 * });
 */
export function useGetModelsQuery(baseOptions: Apollo.QueryHookOptions<GetModelsQuery, GetModelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModelsQuery, GetModelsQueryVariables>(GetModelsDocument, options);
      }
export function useGetModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModelsQuery, GetModelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModelsQuery, GetModelsQueryVariables>(GetModelsDocument, options);
        }
export type GetModelsQueryHookResult = ReturnType<typeof useGetModelsQuery>;
export type GetModelsLazyQueryHookResult = ReturnType<typeof useGetModelsLazyQuery>;
export type GetModelsQueryResult = Apollo.QueryResult<GetModelsQuery, GetModelsQueryVariables>;
export const GetOrgInventoryDocument = gql`
    query GetOrgInventory {
  me {
    dealershipOrganization {
      getInventory {
        __typename
        ... on CarInventory {
          id
          vin
          year
          make
          model
          trim
          series
          transmission
          status
        }
      }
    }
  }
}
    `;

/**
 * __useGetOrgInventoryQuery__
 *
 * To run a query within a React component, call `useGetOrgInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrgInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrgInventoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrgInventoryQuery(baseOptions?: Apollo.QueryHookOptions<GetOrgInventoryQuery, GetOrgInventoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrgInventoryQuery, GetOrgInventoryQueryVariables>(GetOrgInventoryDocument, options);
      }
export function useGetOrgInventoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrgInventoryQuery, GetOrgInventoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrgInventoryQuery, GetOrgInventoryQueryVariables>(GetOrgInventoryDocument, options);
        }
export type GetOrgInventoryQueryHookResult = ReturnType<typeof useGetOrgInventoryQuery>;
export type GetOrgInventoryLazyQueryHookResult = ReturnType<typeof useGetOrgInventoryLazyQuery>;
export type GetOrgInventoryQueryResult = Apollo.QueryResult<GetOrgInventoryQuery, GetOrgInventoryQueryVariables>;
export const QuickAddCarDocument = gql`
    mutation QuickAddCar($details: AddVehicleInput!) {
  quickAddCar(details: $details) {
    id
    vin
    year
    make
    model
    series
    transmission
  }
}
    `;
export type QuickAddCarMutationFn = Apollo.MutationFunction<QuickAddCarMutation, QuickAddCarMutationVariables>;

/**
 * __useQuickAddCarMutation__
 *
 * To run a mutation, you first call `useQuickAddCarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQuickAddCarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [quickAddCarMutation, { data, loading, error }] = useQuickAddCarMutation({
 *   variables: {
 *      details: // value for 'details'
 *   },
 * });
 */
export function useQuickAddCarMutation(baseOptions?: Apollo.MutationHookOptions<QuickAddCarMutation, QuickAddCarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<QuickAddCarMutation, QuickAddCarMutationVariables>(QuickAddCarDocument, options);
      }
export type QuickAddCarMutationHookResult = ReturnType<typeof useQuickAddCarMutation>;
export type QuickAddCarMutationResult = Apollo.MutationResult<QuickAddCarMutation>;
export type QuickAddCarMutationOptions = Apollo.BaseMutationOptions<QuickAddCarMutation, QuickAddCarMutationVariables>;
export const SearchVinDocument = gql`
    query SearchVin($vin: String!) {
  searchVin(vin: $vin) {
    vin
    year
    make
    model
    trim
    series
    transmission
  }
}
    `;

/**
 * __useSearchVinQuery__
 *
 * To run a query within a React component, call `useSearchVinQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchVinQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchVinQuery({
 *   variables: {
 *      vin: // value for 'vin'
 *   },
 * });
 */
export function useSearchVinQuery(baseOptions: Apollo.QueryHookOptions<SearchVinQuery, SearchVinQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchVinQuery, SearchVinQueryVariables>(SearchVinDocument, options);
      }
export function useSearchVinLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchVinQuery, SearchVinQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchVinQuery, SearchVinQueryVariables>(SearchVinDocument, options);
        }
export type SearchVinQueryHookResult = ReturnType<typeof useSearchVinQuery>;
export type SearchVinLazyQueryHookResult = ReturnType<typeof useSearchVinLazyQuery>;
export type SearchVinQueryResult = Apollo.QueryResult<SearchVinQuery, SearchVinQueryVariables>;
export const AddEmployeeByOrgKeyDocument = gql`
    mutation AddEmployeeByOrgKey($EmployeeRole: String!, $Credentials: InputNewUser!, $Key: String!) {
  addEmployeeByOrgKey(
    employeeRole: $EmployeeRole
    credentials: $Credentials
    key: $Key
  ) {
    id
    firstName
    lastName
    username
    email
    createdAt
    updatedAt
  }
}
    `;
export type AddEmployeeByOrgKeyMutationFn = Apollo.MutationFunction<AddEmployeeByOrgKeyMutation, AddEmployeeByOrgKeyMutationVariables>;

/**
 * __useAddEmployeeByOrgKeyMutation__
 *
 * To run a mutation, you first call `useAddEmployeeByOrgKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEmployeeByOrgKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEmployeeByOrgKeyMutation, { data, loading, error }] = useAddEmployeeByOrgKeyMutation({
 *   variables: {
 *      EmployeeRole: // value for 'EmployeeRole'
 *      Credentials: // value for 'Credentials'
 *      Key: // value for 'Key'
 *   },
 * });
 */
export function useAddEmployeeByOrgKeyMutation(baseOptions?: Apollo.MutationHookOptions<AddEmployeeByOrgKeyMutation, AddEmployeeByOrgKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddEmployeeByOrgKeyMutation, AddEmployeeByOrgKeyMutationVariables>(AddEmployeeByOrgKeyDocument, options);
      }
export type AddEmployeeByOrgKeyMutationHookResult = ReturnType<typeof useAddEmployeeByOrgKeyMutation>;
export type AddEmployeeByOrgKeyMutationResult = Apollo.MutationResult<AddEmployeeByOrgKeyMutation>;
export type AddEmployeeByOrgKeyMutationOptions = Apollo.BaseMutationOptions<AddEmployeeByOrgKeyMutation, AddEmployeeByOrgKeyMutationVariables>;
export const GetEmployeeByIdDocument = gql`
    query GetEmployeeById($EmployeeId: ID!, $OrgKey: String!) {
  getEmployeeById(employeeId: $EmployeeId, orgKey: $OrgKey) {
    id
    firstName
    lastName
    username
    email
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetEmployeeByIdQuery__
 *
 * To run a query within a React component, call `useGetEmployeeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmployeeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmployeeByIdQuery({
 *   variables: {
 *      EmployeeId: // value for 'EmployeeId'
 *      OrgKey: // value for 'OrgKey'
 *   },
 * });
 */
export function useGetEmployeeByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>(GetEmployeeByIdDocument, options);
      }
export function useGetEmployeeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>(GetEmployeeByIdDocument, options);
        }
export type GetEmployeeByIdQueryHookResult = ReturnType<typeof useGetEmployeeByIdQuery>;
export type GetEmployeeByIdLazyQueryHookResult = ReturnType<typeof useGetEmployeeByIdLazyQuery>;
export type GetEmployeeByIdQueryResult = Apollo.QueryResult<GetEmployeeByIdQuery, GetEmployeeByIdQueryVariables>;
export const LoginDocument = gql`
    mutation Login($login: UserLogin!) {
  login(login: $login) {
    user {
      id
      dealershipOrganization {
        key
      }
    }
    jwt
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
 *      login: // value for 'login'
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
    id
    firstName
    lastName
    username
    email
    role
    phone_number
    createdAt
    updatedAt
    dealershipOrganization {
      key
      streetAddress
      city
      state
      name
      phone_number
      default_dealer_number
      getInventory {
        ... on CarInventory {
          id
          vin
          year
          make
          model
          trim
          series
          transmission
        }
      }
      dealershipDoors {
        id
        createdAt
        updatedAt
        name
        streetAddress
        city
        state
        zip
        dealerNumber
        phone_number
      }
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
export const RegisterRootUserDocument = gql`
    mutation RegisterRootUser($credentials: InputNewUser!) {
  registerRootUser(credentials: $credentials) {
    errors {
      message
      field
      code
    }
    user {
      data {
        dealershipOrganization {
          key
        }
      }
      jwt
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
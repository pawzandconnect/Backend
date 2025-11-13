import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly File: "File";
    readonly PetProfile: "PetProfile";
    readonly Owner: "Owner";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const FileScalarFieldEnum: {
    readonly id: "id";
    readonly key: "key";
    readonly userId: "userId";
    readonly extension: "extension";
    readonly url: "url";
    readonly type: "type";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];
export declare const PetProfileScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly breed: "breed";
    readonly age: "age";
    readonly bio: "bio";
    readonly media: "media";
    readonly media_type: "media_type";
    readonly species: "species";
    readonly gender: "gender";
    readonly size: "size";
    readonly visibility: "visibility";
    readonly energy_level: "energy_level";
    readonly vaccination_status: "vaccination_status";
    readonly neutered_status: "neutered_status";
    readonly temperament_tags: "temperament_tags";
    readonly available_for_adoption: "available_for_adoption";
    readonly owner_id: "owner_id";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PetProfileScalarFieldEnum = (typeof PetProfileScalarFieldEnum)[keyof typeof PetProfileScalarFieldEnum];
export declare const OwnerScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly auth_provider: "auth_provider";
    readonly email_verified: "email_verified";
    readonly looking_for: "looking_for";
    readonly preferred_meetup_locations: "preferred_meetup_locations";
    readonly visibility: "visibility";
    readonly travel_radius: "travel_radius";
    readonly longitude: "longitude";
    readonly latitude: "latitude";
    readonly city: "city";
    readonly state: "state";
    readonly zip_code: "zip_code";
    readonly country: "country";
    readonly bio: "bio";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

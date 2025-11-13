import * as runtime from "@prisma/client/runtime/library";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "6.18.0",
    engine: "34b5a692b7bd79939a9a2c3ef97d816e749cda2f"
};
export const NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
export const DbNull = runtime.objectEnumValues.instances.DbNull;
export const JsonNull = runtime.objectEnumValues.instances.JsonNull;
export const AnyNull = runtime.objectEnumValues.instances.AnyNull;
export const ModelName = {
    File: 'File',
    PetProfile: 'PetProfile',
    Owner: 'Owner'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const FileScalarFieldEnum = {
    id: 'id',
    key: 'key',
    userId: 'userId',
    extension: 'extension',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const PetProfileScalarFieldEnum = {
    id: 'id',
    name: 'name',
    breed: 'breed',
    age: 'age',
    bio: 'bio',
    media: 'media',
    media_type: 'media_type',
    species: 'species',
    gender: 'gender',
    size: 'size',
    visibility: 'visibility',
    energy_level: 'energy_level',
    vaccination_status: 'vaccination_status',
    neutered_status: 'neutered_status',
    temperament_tags: 'temperament_tags',
    available_for_adoption: 'available_for_adoption',
    owner_id: 'owner_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OwnerScalarFieldEnum = {
    id: 'id',
    email: 'email',
    auth_provider: 'auth_provider',
    email_verified: 'email_verified',
    looking_for: 'looking_for',
    preferred_meetup_locations: 'preferred_meetup_locations',
    visibility: 'visibility',
    travel_radius: 'travel_radius',
    longitude: 'longitude',
    latitude: 'latitude',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code',
    country: 'country',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
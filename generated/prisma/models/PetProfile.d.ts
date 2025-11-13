import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type PetProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$PetProfilePayload>;
export type AggregatePetProfile = {
    _count: PetProfileCountAggregateOutputType | null;
    _avg: PetProfileAvgAggregateOutputType | null;
    _sum: PetProfileSumAggregateOutputType | null;
    _min: PetProfileMinAggregateOutputType | null;
    _max: PetProfileMaxAggregateOutputType | null;
};
export type PetProfileAvgAggregateOutputType = {
    age: number | null;
};
export type PetProfileSumAggregateOutputType = {
    age: number | null;
};
export type PetProfileMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    breed: string | null;
    age: number | null;
    bio: string | null;
    media_type: $Enums.PetMediaType | null;
    species: $Enums.PetSpecies | null;
    gender: $Enums.PetGender | null;
    size: $Enums.PetSize | null;
    visibility: $Enums.ProfileVisibility | null;
    energy_level: $Enums.PetEnergyLevel | null;
    vaccination_status: string | null;
    neutered_status: string | null;
    available_for_adoption: boolean | null;
    owner_id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PetProfileMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    breed: string | null;
    age: number | null;
    bio: string | null;
    media_type: $Enums.PetMediaType | null;
    species: $Enums.PetSpecies | null;
    gender: $Enums.PetGender | null;
    size: $Enums.PetSize | null;
    visibility: $Enums.ProfileVisibility | null;
    energy_level: $Enums.PetEnergyLevel | null;
    vaccination_status: string | null;
    neutered_status: string | null;
    available_for_adoption: boolean | null;
    owner_id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PetProfileCountAggregateOutputType = {
    id: number;
    name: number;
    breed: number;
    age: number;
    bio: number;
    media: number;
    media_type: number;
    species: number;
    gender: number;
    size: number;
    visibility: number;
    energy_level: number;
    vaccination_status: number;
    neutered_status: number;
    temperament_tags: number;
    available_for_adoption: number;
    owner_id: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PetProfileAvgAggregateInputType = {
    age?: true;
};
export type PetProfileSumAggregateInputType = {
    age?: true;
};
export type PetProfileMinAggregateInputType = {
    id?: true;
    name?: true;
    breed?: true;
    age?: true;
    bio?: true;
    media_type?: true;
    species?: true;
    gender?: true;
    size?: true;
    visibility?: true;
    energy_level?: true;
    vaccination_status?: true;
    neutered_status?: true;
    available_for_adoption?: true;
    owner_id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PetProfileMaxAggregateInputType = {
    id?: true;
    name?: true;
    breed?: true;
    age?: true;
    bio?: true;
    media_type?: true;
    species?: true;
    gender?: true;
    size?: true;
    visibility?: true;
    energy_level?: true;
    vaccination_status?: true;
    neutered_status?: true;
    available_for_adoption?: true;
    owner_id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PetProfileCountAggregateInputType = {
    id?: true;
    name?: true;
    breed?: true;
    age?: true;
    bio?: true;
    media?: true;
    media_type?: true;
    species?: true;
    gender?: true;
    size?: true;
    visibility?: true;
    energy_level?: true;
    vaccination_status?: true;
    neutered_status?: true;
    temperament_tags?: true;
    available_for_adoption?: true;
    owner_id?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PetProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetProfileWhereInput;
    orderBy?: Prisma.PetProfileOrderByWithRelationInput | Prisma.PetProfileOrderByWithRelationInput[];
    cursor?: Prisma.PetProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PetProfileCountAggregateInputType;
    _avg?: PetProfileAvgAggregateInputType;
    _sum?: PetProfileSumAggregateInputType;
    _min?: PetProfileMinAggregateInputType;
    _max?: PetProfileMaxAggregateInputType;
};
export type GetPetProfileAggregateType<T extends PetProfileAggregateArgs> = {
    [P in keyof T & keyof AggregatePetProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePetProfile[P]> : Prisma.GetScalarType<T[P], AggregatePetProfile[P]>;
};
export type PetProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetProfileWhereInput;
    orderBy?: Prisma.PetProfileOrderByWithAggregationInput | Prisma.PetProfileOrderByWithAggregationInput[];
    by: Prisma.PetProfileScalarFieldEnum[] | Prisma.PetProfileScalarFieldEnum;
    having?: Prisma.PetProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PetProfileCountAggregateInputType | true;
    _avg?: PetProfileAvgAggregateInputType;
    _sum?: PetProfileSumAggregateInputType;
    _min?: PetProfileMinAggregateInputType;
    _max?: PetProfileMaxAggregateInputType;
};
export type PetProfileGroupByOutputType = {
    id: string;
    name: string;
    breed: string;
    age: number;
    bio: string;
    media: runtime.JsonValue[];
    media_type: $Enums.PetMediaType;
    species: $Enums.PetSpecies;
    gender: $Enums.PetGender;
    size: $Enums.PetSize;
    visibility: $Enums.ProfileVisibility;
    energy_level: $Enums.PetEnergyLevel | null;
    vaccination_status: string | null;
    neutered_status: string | null;
    temperament_tags: string[];
    available_for_adoption: boolean;
    owner_id: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PetProfileCountAggregateOutputType | null;
    _avg: PetProfileAvgAggregateOutputType | null;
    _sum: PetProfileSumAggregateOutputType | null;
    _min: PetProfileMinAggregateOutputType | null;
    _max: PetProfileMaxAggregateOutputType | null;
};
type GetPetProfileGroupByPayload<T extends PetProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PetProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PetProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PetProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PetProfileGroupByOutputType[P]>;
}>>;
export type PetProfileWhereInput = {
    AND?: Prisma.PetProfileWhereInput | Prisma.PetProfileWhereInput[];
    OR?: Prisma.PetProfileWhereInput[];
    NOT?: Prisma.PetProfileWhereInput | Prisma.PetProfileWhereInput[];
    id?: Prisma.StringFilter<"PetProfile"> | string;
    name?: Prisma.StringFilter<"PetProfile"> | string;
    breed?: Prisma.StringFilter<"PetProfile"> | string;
    age?: Prisma.IntFilter<"PetProfile"> | number;
    bio?: Prisma.StringFilter<"PetProfile"> | string;
    media?: Prisma.JsonNullableListFilter<"PetProfile">;
    media_type?: Prisma.EnumPetMediaTypeFilter<"PetProfile"> | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesFilter<"PetProfile"> | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderFilter<"PetProfile"> | $Enums.PetGender;
    size?: Prisma.EnumPetSizeFilter<"PetProfile"> | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityFilter<"PetProfile"> | $Enums.ProfileVisibility;
    energy_level?: Prisma.EnumPetEnergyLevelNullableFilter<"PetProfile"> | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.StringNullableFilter<"PetProfile"> | string | null;
    neutered_status?: Prisma.StringNullableFilter<"PetProfile"> | string | null;
    temperament_tags?: Prisma.StringNullableListFilter<"PetProfile">;
    available_for_adoption?: Prisma.BoolFilter<"PetProfile"> | boolean;
    owner_id?: Prisma.StringFilter<"PetProfile"> | string;
    createdAt?: Prisma.DateTimeFilter<"PetProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PetProfile"> | Date | string;
    owner?: Prisma.XOR<Prisma.OwnerScalarRelationFilter, Prisma.OwnerWhereInput>;
};
export type PetProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    age?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    media?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    energy_level?: Prisma.SortOrderInput | Prisma.SortOrder;
    vaccination_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    neutered_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperament_tags?: Prisma.SortOrder;
    available_for_adoption?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    owner?: Prisma.OwnerOrderByWithRelationInput;
};
export type PetProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    owner_id?: string;
    AND?: Prisma.PetProfileWhereInput | Prisma.PetProfileWhereInput[];
    OR?: Prisma.PetProfileWhereInput[];
    NOT?: Prisma.PetProfileWhereInput | Prisma.PetProfileWhereInput[];
    name?: Prisma.StringFilter<"PetProfile"> | string;
    breed?: Prisma.StringFilter<"PetProfile"> | string;
    age?: Prisma.IntFilter<"PetProfile"> | number;
    bio?: Prisma.StringFilter<"PetProfile"> | string;
    media?: Prisma.JsonNullableListFilter<"PetProfile">;
    media_type?: Prisma.EnumPetMediaTypeFilter<"PetProfile"> | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesFilter<"PetProfile"> | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderFilter<"PetProfile"> | $Enums.PetGender;
    size?: Prisma.EnumPetSizeFilter<"PetProfile"> | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityFilter<"PetProfile"> | $Enums.ProfileVisibility;
    energy_level?: Prisma.EnumPetEnergyLevelNullableFilter<"PetProfile"> | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.StringNullableFilter<"PetProfile"> | string | null;
    neutered_status?: Prisma.StringNullableFilter<"PetProfile"> | string | null;
    temperament_tags?: Prisma.StringNullableListFilter<"PetProfile">;
    available_for_adoption?: Prisma.BoolFilter<"PetProfile"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"PetProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PetProfile"> | Date | string;
    owner?: Prisma.XOR<Prisma.OwnerScalarRelationFilter, Prisma.OwnerWhereInput>;
}, "id" | "owner_id">;
export type PetProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    age?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    media?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    energy_level?: Prisma.SortOrderInput | Prisma.SortOrder;
    vaccination_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    neutered_status?: Prisma.SortOrderInput | Prisma.SortOrder;
    temperament_tags?: Prisma.SortOrder;
    available_for_adoption?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PetProfileCountOrderByAggregateInput;
    _avg?: Prisma.PetProfileAvgOrderByAggregateInput;
    _max?: Prisma.PetProfileMaxOrderByAggregateInput;
    _min?: Prisma.PetProfileMinOrderByAggregateInput;
    _sum?: Prisma.PetProfileSumOrderByAggregateInput;
};
export type PetProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.PetProfileScalarWhereWithAggregatesInput | Prisma.PetProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.PetProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PetProfileScalarWhereWithAggregatesInput | Prisma.PetProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PetProfile"> | string;
    name?: Prisma.StringWithAggregatesFilter<"PetProfile"> | string;
    breed?: Prisma.StringWithAggregatesFilter<"PetProfile"> | string;
    age?: Prisma.IntWithAggregatesFilter<"PetProfile"> | number;
    bio?: Prisma.StringWithAggregatesFilter<"PetProfile"> | string;
    media?: Prisma.JsonNullableListFilter<"PetProfile">;
    media_type?: Prisma.EnumPetMediaTypeWithAggregatesFilter<"PetProfile"> | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesWithAggregatesFilter<"PetProfile"> | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderWithAggregatesFilter<"PetProfile"> | $Enums.PetGender;
    size?: Prisma.EnumPetSizeWithAggregatesFilter<"PetProfile"> | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityWithAggregatesFilter<"PetProfile"> | $Enums.ProfileVisibility;
    energy_level?: Prisma.EnumPetEnergyLevelNullableWithAggregatesFilter<"PetProfile"> | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.StringNullableWithAggregatesFilter<"PetProfile"> | string | null;
    neutered_status?: Prisma.StringNullableWithAggregatesFilter<"PetProfile"> | string | null;
    temperament_tags?: Prisma.StringNullableListFilter<"PetProfile">;
    available_for_adoption?: Prisma.BoolWithAggregatesFilter<"PetProfile"> | boolean;
    owner_id?: Prisma.StringWithAggregatesFilter<"PetProfile"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PetProfile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PetProfile"> | Date | string;
};
export type PetProfileCreateInput = {
    id?: string;
    name: string;
    breed: string;
    age: number;
    bio: string;
    media?: Prisma.PetProfileCreatemediaInput | runtime.InputJsonValue[];
    media_type: $Enums.PetMediaType;
    species: $Enums.PetSpecies;
    gender: $Enums.PetGender;
    size: $Enums.PetSize;
    visibility?: $Enums.ProfileVisibility;
    energy_level?: $Enums.PetEnergyLevel | null;
    vaccination_status?: string | null;
    neutered_status?: string | null;
    temperament_tags?: Prisma.PetProfileCreatetemperament_tagsInput | string[];
    available_for_adoption?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    owner: Prisma.OwnerCreateNestedOneWithoutPetProfileInput;
};
export type PetProfileUncheckedCreateInput = {
    id?: string;
    name: string;
    breed: string;
    age: number;
    bio: string;
    media?: Prisma.PetProfileCreatemediaInput | runtime.InputJsonValue[];
    media_type: $Enums.PetMediaType;
    species: $Enums.PetSpecies;
    gender: $Enums.PetGender;
    size: $Enums.PetSize;
    visibility?: $Enums.ProfileVisibility;
    energy_level?: $Enums.PetEnergyLevel | null;
    vaccination_status?: string | null;
    neutered_status?: string | null;
    temperament_tags?: Prisma.PetProfileCreatetemperament_tagsInput | string[];
    available_for_adoption?: boolean;
    owner_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PetProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    age?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    media?: Prisma.PetProfileUpdatemediaInput | runtime.InputJsonValue[];
    media_type?: Prisma.EnumPetMediaTypeFieldUpdateOperationsInput | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderFieldUpdateOperationsInput | $Enums.PetGender;
    size?: Prisma.EnumPetSizeFieldUpdateOperationsInput | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    energy_level?: Prisma.NullableEnumPetEnergyLevelFieldUpdateOperationsInput | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neutered_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperament_tags?: Prisma.PetProfileUpdatetemperament_tagsInput | string[];
    available_for_adoption?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.OwnerUpdateOneRequiredWithoutPetProfileNestedInput;
};
export type PetProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    age?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    media?: Prisma.PetProfileUpdatemediaInput | runtime.InputJsonValue[];
    media_type?: Prisma.EnumPetMediaTypeFieldUpdateOperationsInput | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderFieldUpdateOperationsInput | $Enums.PetGender;
    size?: Prisma.EnumPetSizeFieldUpdateOperationsInput | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    energy_level?: Prisma.NullableEnumPetEnergyLevelFieldUpdateOperationsInput | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neutered_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperament_tags?: Prisma.PetProfileUpdatetemperament_tagsInput | string[];
    available_for_adoption?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    owner_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetProfileCreateManyInput = {
    id?: string;
    name: string;
    breed: string;
    age: number;
    bio: string;
    media?: Prisma.PetProfileCreatemediaInput | runtime.InputJsonValue[];
    media_type: $Enums.PetMediaType;
    species: $Enums.PetSpecies;
    gender: $Enums.PetGender;
    size: $Enums.PetSize;
    visibility?: $Enums.ProfileVisibility;
    energy_level?: $Enums.PetEnergyLevel | null;
    vaccination_status?: string | null;
    neutered_status?: string | null;
    temperament_tags?: Prisma.PetProfileCreatetemperament_tagsInput | string[];
    available_for_adoption?: boolean;
    owner_id: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PetProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    age?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    media?: Prisma.PetProfileUpdatemediaInput | runtime.InputJsonValue[];
    media_type?: Prisma.EnumPetMediaTypeFieldUpdateOperationsInput | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderFieldUpdateOperationsInput | $Enums.PetGender;
    size?: Prisma.EnumPetSizeFieldUpdateOperationsInput | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    energy_level?: Prisma.NullableEnumPetEnergyLevelFieldUpdateOperationsInput | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neutered_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperament_tags?: Prisma.PetProfileUpdatetemperament_tagsInput | string[];
    available_for_adoption?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    age?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    media?: Prisma.PetProfileUpdatemediaInput | runtime.InputJsonValue[];
    media_type?: Prisma.EnumPetMediaTypeFieldUpdateOperationsInput | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderFieldUpdateOperationsInput | $Enums.PetGender;
    size?: Prisma.EnumPetSizeFieldUpdateOperationsInput | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    energy_level?: Prisma.NullableEnumPetEnergyLevelFieldUpdateOperationsInput | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neutered_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperament_tags?: Prisma.PetProfileUpdatetemperament_tagsInput | string[];
    available_for_adoption?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    owner_id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JsonNullableListFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableListFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue[] | Prisma.ListJsonFieldRefInput<$PrismaModel> | null;
    has?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    hasEvery?: runtime.InputJsonValue[] | Prisma.ListJsonFieldRefInput<$PrismaModel>;
    hasSome?: runtime.InputJsonValue[] | Prisma.ListJsonFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type PetProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    age?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    media?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    energy_level?: Prisma.SortOrder;
    vaccination_status?: Prisma.SortOrder;
    neutered_status?: Prisma.SortOrder;
    temperament_tags?: Prisma.SortOrder;
    available_for_adoption?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PetProfileAvgOrderByAggregateInput = {
    age?: Prisma.SortOrder;
};
export type PetProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    age?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    energy_level?: Prisma.SortOrder;
    vaccination_status?: Prisma.SortOrder;
    neutered_status?: Prisma.SortOrder;
    available_for_adoption?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PetProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    breed?: Prisma.SortOrder;
    age?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    species?: Prisma.SortOrder;
    gender?: Prisma.SortOrder;
    size?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    energy_level?: Prisma.SortOrder;
    vaccination_status?: Prisma.SortOrder;
    neutered_status?: Prisma.SortOrder;
    available_for_adoption?: Prisma.SortOrder;
    owner_id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PetProfileSumOrderByAggregateInput = {
    age?: Prisma.SortOrder;
};
export type PetProfileNullableScalarRelationFilter = {
    is?: Prisma.PetProfileWhereInput | null;
    isNot?: Prisma.PetProfileWhereInput | null;
};
export type PetProfileCreatemediaInput = {
    set: runtime.InputJsonValue[];
};
export type PetProfileCreatetemperament_tagsInput = {
    set: string[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PetProfileUpdatemediaInput = {
    set?: runtime.InputJsonValue[];
    push?: runtime.InputJsonValue | runtime.InputJsonValue[];
};
export type EnumPetMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.PetMediaType;
};
export type EnumPetSpeciesFieldUpdateOperationsInput = {
    set?: $Enums.PetSpecies;
};
export type EnumPetGenderFieldUpdateOperationsInput = {
    set?: $Enums.PetGender;
};
export type EnumPetSizeFieldUpdateOperationsInput = {
    set?: $Enums.PetSize;
};
export type EnumProfileVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.ProfileVisibility;
};
export type NullableEnumPetEnergyLevelFieldUpdateOperationsInput = {
    set?: $Enums.PetEnergyLevel | null;
};
export type PetProfileUpdatetemperament_tagsInput = {
    set?: string[];
    push?: string | string[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type PetProfileCreateNestedOneWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.PetProfileCreateWithoutOwnerInput, Prisma.PetProfileUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: Prisma.PetProfileCreateOrConnectWithoutOwnerInput;
    connect?: Prisma.PetProfileWhereUniqueInput;
};
export type PetProfileUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.PetProfileCreateWithoutOwnerInput, Prisma.PetProfileUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: Prisma.PetProfileCreateOrConnectWithoutOwnerInput;
    connect?: Prisma.PetProfileWhereUniqueInput;
};
export type PetProfileUpdateOneWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.PetProfileCreateWithoutOwnerInput, Prisma.PetProfileUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: Prisma.PetProfileCreateOrConnectWithoutOwnerInput;
    upsert?: Prisma.PetProfileUpsertWithoutOwnerInput;
    disconnect?: Prisma.PetProfileWhereInput | boolean;
    delete?: Prisma.PetProfileWhereInput | boolean;
    connect?: Prisma.PetProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetProfileUpdateToOneWithWhereWithoutOwnerInput, Prisma.PetProfileUpdateWithoutOwnerInput>, Prisma.PetProfileUncheckedUpdateWithoutOwnerInput>;
};
export type PetProfileUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.PetProfileCreateWithoutOwnerInput, Prisma.PetProfileUncheckedCreateWithoutOwnerInput>;
    connectOrCreate?: Prisma.PetProfileCreateOrConnectWithoutOwnerInput;
    upsert?: Prisma.PetProfileUpsertWithoutOwnerInput;
    disconnect?: Prisma.PetProfileWhereInput | boolean;
    delete?: Prisma.PetProfileWhereInput | boolean;
    connect?: Prisma.PetProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PetProfileUpdateToOneWithWhereWithoutOwnerInput, Prisma.PetProfileUpdateWithoutOwnerInput>, Prisma.PetProfileUncheckedUpdateWithoutOwnerInput>;
};
export type PetProfileCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    breed: string;
    age: number;
    bio: string;
    media?: Prisma.PetProfileCreatemediaInput | runtime.InputJsonValue[];
    media_type: $Enums.PetMediaType;
    species: $Enums.PetSpecies;
    gender: $Enums.PetGender;
    size: $Enums.PetSize;
    visibility?: $Enums.ProfileVisibility;
    energy_level?: $Enums.PetEnergyLevel | null;
    vaccination_status?: string | null;
    neutered_status?: string | null;
    temperament_tags?: Prisma.PetProfileCreatetemperament_tagsInput | string[];
    available_for_adoption?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PetProfileUncheckedCreateWithoutOwnerInput = {
    id?: string;
    name: string;
    breed: string;
    age: number;
    bio: string;
    media?: Prisma.PetProfileCreatemediaInput | runtime.InputJsonValue[];
    media_type: $Enums.PetMediaType;
    species: $Enums.PetSpecies;
    gender: $Enums.PetGender;
    size: $Enums.PetSize;
    visibility?: $Enums.ProfileVisibility;
    energy_level?: $Enums.PetEnergyLevel | null;
    vaccination_status?: string | null;
    neutered_status?: string | null;
    temperament_tags?: Prisma.PetProfileCreatetemperament_tagsInput | string[];
    available_for_adoption?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PetProfileCreateOrConnectWithoutOwnerInput = {
    where: Prisma.PetProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetProfileCreateWithoutOwnerInput, Prisma.PetProfileUncheckedCreateWithoutOwnerInput>;
};
export type PetProfileUpsertWithoutOwnerInput = {
    update: Prisma.XOR<Prisma.PetProfileUpdateWithoutOwnerInput, Prisma.PetProfileUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.PetProfileCreateWithoutOwnerInput, Prisma.PetProfileUncheckedCreateWithoutOwnerInput>;
    where?: Prisma.PetProfileWhereInput;
};
export type PetProfileUpdateToOneWithWhereWithoutOwnerInput = {
    where?: Prisma.PetProfileWhereInput;
    data: Prisma.XOR<Prisma.PetProfileUpdateWithoutOwnerInput, Prisma.PetProfileUncheckedUpdateWithoutOwnerInput>;
};
export type PetProfileUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    age?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    media?: Prisma.PetProfileUpdatemediaInput | runtime.InputJsonValue[];
    media_type?: Prisma.EnumPetMediaTypeFieldUpdateOperationsInput | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderFieldUpdateOperationsInput | $Enums.PetGender;
    size?: Prisma.EnumPetSizeFieldUpdateOperationsInput | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    energy_level?: Prisma.NullableEnumPetEnergyLevelFieldUpdateOperationsInput | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neutered_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperament_tags?: Prisma.PetProfileUpdatetemperament_tagsInput | string[];
    available_for_adoption?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetProfileUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    breed?: Prisma.StringFieldUpdateOperationsInput | string;
    age?: Prisma.IntFieldUpdateOperationsInput | number;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    media?: Prisma.PetProfileUpdatemediaInput | runtime.InputJsonValue[];
    media_type?: Prisma.EnumPetMediaTypeFieldUpdateOperationsInput | $Enums.PetMediaType;
    species?: Prisma.EnumPetSpeciesFieldUpdateOperationsInput | $Enums.PetSpecies;
    gender?: Prisma.EnumPetGenderFieldUpdateOperationsInput | $Enums.PetGender;
    size?: Prisma.EnumPetSizeFieldUpdateOperationsInput | $Enums.PetSize;
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    energy_level?: Prisma.NullableEnumPetEnergyLevelFieldUpdateOperationsInput | $Enums.PetEnergyLevel | null;
    vaccination_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    neutered_status?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temperament_tags?: Prisma.PetProfileUpdatetemperament_tagsInput | string[];
    available_for_adoption?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PetProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    breed?: boolean;
    age?: boolean;
    bio?: boolean;
    media?: boolean;
    media_type?: boolean;
    species?: boolean;
    gender?: boolean;
    size?: boolean;
    visibility?: boolean;
    energy_level?: boolean;
    vaccination_status?: boolean;
    neutered_status?: boolean;
    temperament_tags?: boolean;
    available_for_adoption?: boolean;
    owner_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.OwnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["petProfile"]>;
export type PetProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    breed?: boolean;
    age?: boolean;
    bio?: boolean;
    media?: boolean;
    media_type?: boolean;
    species?: boolean;
    gender?: boolean;
    size?: boolean;
    visibility?: boolean;
    energy_level?: boolean;
    vaccination_status?: boolean;
    neutered_status?: boolean;
    temperament_tags?: boolean;
    available_for_adoption?: boolean;
    owner_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.OwnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["petProfile"]>;
export type PetProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    breed?: boolean;
    age?: boolean;
    bio?: boolean;
    media?: boolean;
    media_type?: boolean;
    species?: boolean;
    gender?: boolean;
    size?: boolean;
    visibility?: boolean;
    energy_level?: boolean;
    vaccination_status?: boolean;
    neutered_status?: boolean;
    temperament_tags?: boolean;
    available_for_adoption?: boolean;
    owner_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    owner?: boolean | Prisma.OwnerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["petProfile"]>;
export type PetProfileSelectScalar = {
    id?: boolean;
    name?: boolean;
    breed?: boolean;
    age?: boolean;
    bio?: boolean;
    media?: boolean;
    media_type?: boolean;
    species?: boolean;
    gender?: boolean;
    size?: boolean;
    visibility?: boolean;
    energy_level?: boolean;
    vaccination_status?: boolean;
    neutered_status?: boolean;
    temperament_tags?: boolean;
    available_for_adoption?: boolean;
    owner_id?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PetProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "breed" | "age" | "bio" | "media" | "media_type" | "species" | "gender" | "size" | "visibility" | "energy_level" | "vaccination_status" | "neutered_status" | "temperament_tags" | "available_for_adoption" | "owner_id" | "createdAt" | "updatedAt", ExtArgs["result"]["petProfile"]>;
export type PetProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.OwnerDefaultArgs<ExtArgs>;
};
export type PetProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.OwnerDefaultArgs<ExtArgs>;
};
export type PetProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.OwnerDefaultArgs<ExtArgs>;
};
export type $PetProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PetProfile";
    objects: {
        owner: Prisma.$OwnerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        breed: string;
        age: number;
        bio: string;
        media: runtime.JsonValue[];
        media_type: $Enums.PetMediaType;
        species: $Enums.PetSpecies;
        gender: $Enums.PetGender;
        size: $Enums.PetSize;
        visibility: $Enums.ProfileVisibility;
        energy_level: $Enums.PetEnergyLevel | null;
        vaccination_status: string | null;
        neutered_status: string | null;
        temperament_tags: string[];
        available_for_adoption: boolean;
        owner_id: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["petProfile"]>;
    composites: {};
};
export type PetProfileGetPayload<S extends boolean | null | undefined | PetProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PetProfilePayload, S>;
export type PetProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PetProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PetProfileCountAggregateInputType | true;
};
export interface PetProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PetProfile'];
        meta: {
            name: 'PetProfile';
        };
    };
    findUnique<T extends PetProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, PetProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PetProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PetProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PetProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, PetProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PetProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PetProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PetProfileFindManyArgs>(args?: Prisma.SelectSubset<T, PetProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PetProfileCreateArgs>(args: Prisma.SelectSubset<T, PetProfileCreateArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PetProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, PetProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PetProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PetProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PetProfileDeleteArgs>(args: Prisma.SelectSubset<T, PetProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PetProfileUpdateArgs>(args: Prisma.SelectSubset<T, PetProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PetProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, PetProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PetProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, PetProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PetProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PetProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PetProfileUpsertArgs>(args: Prisma.SelectSubset<T, PetProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PetProfileCountArgs>(args?: Prisma.Subset<T, PetProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PetProfileCountAggregateOutputType> : number>;
    aggregate<T extends PetProfileAggregateArgs>(args: Prisma.Subset<T, PetProfileAggregateArgs>): Prisma.PrismaPromise<GetPetProfileAggregateType<T>>;
    groupBy<T extends PetProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PetProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: PetProfileGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PetProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PetProfileFieldRefs;
}
export interface Prisma__PetProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.OwnerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OwnerDefaultArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PetProfileFieldRefs {
    readonly id: Prisma.FieldRef<"PetProfile", 'String'>;
    readonly name: Prisma.FieldRef<"PetProfile", 'String'>;
    readonly breed: Prisma.FieldRef<"PetProfile", 'String'>;
    readonly age: Prisma.FieldRef<"PetProfile", 'Int'>;
    readonly bio: Prisma.FieldRef<"PetProfile", 'String'>;
    readonly media: Prisma.FieldRef<"PetProfile", 'Json[]'>;
    readonly media_type: Prisma.FieldRef<"PetProfile", 'PetMediaType'>;
    readonly species: Prisma.FieldRef<"PetProfile", 'PetSpecies'>;
    readonly gender: Prisma.FieldRef<"PetProfile", 'PetGender'>;
    readonly size: Prisma.FieldRef<"PetProfile", 'PetSize'>;
    readonly visibility: Prisma.FieldRef<"PetProfile", 'ProfileVisibility'>;
    readonly energy_level: Prisma.FieldRef<"PetProfile", 'PetEnergyLevel'>;
    readonly vaccination_status: Prisma.FieldRef<"PetProfile", 'String'>;
    readonly neutered_status: Prisma.FieldRef<"PetProfile", 'String'>;
    readonly temperament_tags: Prisma.FieldRef<"PetProfile", 'String[]'>;
    readonly available_for_adoption: Prisma.FieldRef<"PetProfile", 'Boolean'>;
    readonly owner_id: Prisma.FieldRef<"PetProfile", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PetProfile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PetProfile", 'DateTime'>;
}
export type PetProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    where: Prisma.PetProfileWhereUniqueInput;
};
export type PetProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    where: Prisma.PetProfileWhereUniqueInput;
};
export type PetProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    where?: Prisma.PetProfileWhereInput;
    orderBy?: Prisma.PetProfileOrderByWithRelationInput | Prisma.PetProfileOrderByWithRelationInput[];
    cursor?: Prisma.PetProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PetProfileScalarFieldEnum | Prisma.PetProfileScalarFieldEnum[];
};
export type PetProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    where?: Prisma.PetProfileWhereInput;
    orderBy?: Prisma.PetProfileOrderByWithRelationInput | Prisma.PetProfileOrderByWithRelationInput[];
    cursor?: Prisma.PetProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PetProfileScalarFieldEnum | Prisma.PetProfileScalarFieldEnum[];
};
export type PetProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    where?: Prisma.PetProfileWhereInput;
    orderBy?: Prisma.PetProfileOrderByWithRelationInput | Prisma.PetProfileOrderByWithRelationInput[];
    cursor?: Prisma.PetProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PetProfileScalarFieldEnum | Prisma.PetProfileScalarFieldEnum[];
};
export type PetProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetProfileCreateInput, Prisma.PetProfileUncheckedCreateInput>;
};
export type PetProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PetProfileCreateManyInput | Prisma.PetProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PetProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    data: Prisma.PetProfileCreateManyInput | Prisma.PetProfileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PetProfileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PetProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetProfileUpdateInput, Prisma.PetProfileUncheckedUpdateInput>;
    where: Prisma.PetProfileWhereUniqueInput;
};
export type PetProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PetProfileUpdateManyMutationInput, Prisma.PetProfileUncheckedUpdateManyInput>;
    where?: Prisma.PetProfileWhereInput;
    limit?: number;
};
export type PetProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PetProfileUpdateManyMutationInput, Prisma.PetProfileUncheckedUpdateManyInput>;
    where?: Prisma.PetProfileWhereInput;
    limit?: number;
    include?: Prisma.PetProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PetProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    where: Prisma.PetProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.PetProfileCreateInput, Prisma.PetProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PetProfileUpdateInput, Prisma.PetProfileUncheckedUpdateInput>;
};
export type PetProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    where: Prisma.PetProfileWhereUniqueInput;
};
export type PetProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PetProfileWhereInput;
    limit?: number;
};
export type PetProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
};
export {};

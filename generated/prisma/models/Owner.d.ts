import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type OwnerModel = runtime.Types.Result.DefaultSelection<Prisma.$OwnerPayload>;
export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
};
export type OwnerAvgAggregateOutputType = {
    travel_radius: number | null;
    longitude: number | null;
    latitude: number | null;
};
export type OwnerSumAggregateOutputType = {
    travel_radius: number | null;
    longitude: number | null;
    latitude: number | null;
};
export type OwnerMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    auth_provider: string | null;
    email_verified: boolean | null;
    visibility: $Enums.ProfileVisibility | null;
    travel_radius: number | null;
    longitude: number | null;
    latitude: number | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    bio: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OwnerMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    auth_provider: string | null;
    email_verified: boolean | null;
    visibility: $Enums.ProfileVisibility | null;
    travel_radius: number | null;
    longitude: number | null;
    latitude: number | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    bio: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OwnerCountAggregateOutputType = {
    id: number;
    email: number;
    auth_provider: number;
    email_verified: number;
    looking_for: number;
    preferred_meetup_locations: number;
    visibility: number;
    travel_radius: number;
    longitude: number;
    latitude: number;
    city: number;
    state: number;
    zip_code: number;
    country: number;
    bio: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OwnerAvgAggregateInputType = {
    travel_radius?: true;
    longitude?: true;
    latitude?: true;
};
export type OwnerSumAggregateInputType = {
    travel_radius?: true;
    longitude?: true;
    latitude?: true;
};
export type OwnerMinAggregateInputType = {
    id?: true;
    email?: true;
    auth_provider?: true;
    email_verified?: true;
    visibility?: true;
    travel_radius?: true;
    longitude?: true;
    latitude?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OwnerMaxAggregateInputType = {
    id?: true;
    email?: true;
    auth_provider?: true;
    email_verified?: true;
    visibility?: true;
    travel_radius?: true;
    longitude?: true;
    latitude?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OwnerCountAggregateInputType = {
    id?: true;
    email?: true;
    auth_provider?: true;
    email_verified?: true;
    looking_for?: true;
    preferred_meetup_locations?: true;
    visibility?: true;
    travel_radius?: true;
    longitude?: true;
    latitude?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OwnerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OwnerWhereInput;
    orderBy?: Prisma.OwnerOrderByWithRelationInput | Prisma.OwnerOrderByWithRelationInput[];
    cursor?: Prisma.OwnerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OwnerCountAggregateInputType;
    _avg?: OwnerAvgAggregateInputType;
    _sum?: OwnerSumAggregateInputType;
    _min?: OwnerMinAggregateInputType;
    _max?: OwnerMaxAggregateInputType;
};
export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
    [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOwner[P]> : Prisma.GetScalarType<T[P], AggregateOwner[P]>;
};
export type OwnerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OwnerWhereInput;
    orderBy?: Prisma.OwnerOrderByWithAggregationInput | Prisma.OwnerOrderByWithAggregationInput[];
    by: Prisma.OwnerScalarFieldEnum[] | Prisma.OwnerScalarFieldEnum;
    having?: Prisma.OwnerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OwnerCountAggregateInputType | true;
    _avg?: OwnerAvgAggregateInputType;
    _sum?: OwnerSumAggregateInputType;
    _min?: OwnerMinAggregateInputType;
    _max?: OwnerMaxAggregateInputType;
};
export type OwnerGroupByOutputType = {
    id: string;
    email: string;
    auth_provider: string;
    email_verified: boolean;
    looking_for: string[];
    preferred_meetup_locations: string[];
    visibility: $Enums.ProfileVisibility;
    travel_radius: number | null;
    longitude: number | null;
    latitude: number | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    country: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: OwnerCountAggregateOutputType | null;
    _avg: OwnerAvgAggregateOutputType | null;
    _sum: OwnerSumAggregateOutputType | null;
    _min: OwnerMinAggregateOutputType | null;
    _max: OwnerMaxAggregateOutputType | null;
};
type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OwnerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OwnerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OwnerGroupByOutputType[P]>;
}>>;
export type OwnerWhereInput = {
    AND?: Prisma.OwnerWhereInput | Prisma.OwnerWhereInput[];
    OR?: Prisma.OwnerWhereInput[];
    NOT?: Prisma.OwnerWhereInput | Prisma.OwnerWhereInput[];
    id?: Prisma.StringFilter<"Owner"> | string;
    email?: Prisma.StringFilter<"Owner"> | string;
    auth_provider?: Prisma.StringFilter<"Owner"> | string;
    email_verified?: Prisma.BoolFilter<"Owner"> | boolean;
    looking_for?: Prisma.StringNullableListFilter<"Owner">;
    preferred_meetup_locations?: Prisma.StringNullableListFilter<"Owner">;
    visibility?: Prisma.EnumProfileVisibilityFilter<"Owner"> | $Enums.ProfileVisibility;
    travel_radius?: Prisma.IntNullableFilter<"Owner"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Owner"> | number | null;
    latitude?: Prisma.FloatNullableFilter<"Owner"> | number | null;
    city?: Prisma.StringNullableFilter<"Owner"> | string | null;
    state?: Prisma.StringNullableFilter<"Owner"> | string | null;
    zip_code?: Prisma.StringNullableFilter<"Owner"> | string | null;
    country?: Prisma.StringNullableFilter<"Owner"> | string | null;
    bio?: Prisma.StringNullableFilter<"Owner"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Owner"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Owner"> | Date | string;
    petProfile?: Prisma.XOR<Prisma.PetProfileNullableScalarRelationFilter, Prisma.PetProfileWhereInput> | null;
};
export type OwnerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    looking_for?: Prisma.SortOrder;
    preferred_meetup_locations?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    travel_radius?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    zip_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    petProfile?: Prisma.PetProfileOrderByWithRelationInput;
};
export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.OwnerWhereInput | Prisma.OwnerWhereInput[];
    OR?: Prisma.OwnerWhereInput[];
    NOT?: Prisma.OwnerWhereInput | Prisma.OwnerWhereInput[];
    auth_provider?: Prisma.StringFilter<"Owner"> | string;
    email_verified?: Prisma.BoolFilter<"Owner"> | boolean;
    looking_for?: Prisma.StringNullableListFilter<"Owner">;
    preferred_meetup_locations?: Prisma.StringNullableListFilter<"Owner">;
    visibility?: Prisma.EnumProfileVisibilityFilter<"Owner"> | $Enums.ProfileVisibility;
    travel_radius?: Prisma.IntNullableFilter<"Owner"> | number | null;
    longitude?: Prisma.FloatNullableFilter<"Owner"> | number | null;
    latitude?: Prisma.FloatNullableFilter<"Owner"> | number | null;
    city?: Prisma.StringNullableFilter<"Owner"> | string | null;
    state?: Prisma.StringNullableFilter<"Owner"> | string | null;
    zip_code?: Prisma.StringNullableFilter<"Owner"> | string | null;
    country?: Prisma.StringNullableFilter<"Owner"> | string | null;
    bio?: Prisma.StringNullableFilter<"Owner"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Owner"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Owner"> | Date | string;
    petProfile?: Prisma.XOR<Prisma.PetProfileNullableScalarRelationFilter, Prisma.PetProfileWhereInput> | null;
}, "id" | "email">;
export type OwnerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    looking_for?: Prisma.SortOrder;
    preferred_meetup_locations?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    travel_radius?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    zip_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OwnerCountOrderByAggregateInput;
    _avg?: Prisma.OwnerAvgOrderByAggregateInput;
    _max?: Prisma.OwnerMaxOrderByAggregateInput;
    _min?: Prisma.OwnerMinOrderByAggregateInput;
    _sum?: Prisma.OwnerSumOrderByAggregateInput;
};
export type OwnerScalarWhereWithAggregatesInput = {
    AND?: Prisma.OwnerScalarWhereWithAggregatesInput | Prisma.OwnerScalarWhereWithAggregatesInput[];
    OR?: Prisma.OwnerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OwnerScalarWhereWithAggregatesInput | Prisma.OwnerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Owner"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Owner"> | string;
    auth_provider?: Prisma.StringWithAggregatesFilter<"Owner"> | string;
    email_verified?: Prisma.BoolWithAggregatesFilter<"Owner"> | boolean;
    looking_for?: Prisma.StringNullableListFilter<"Owner">;
    preferred_meetup_locations?: Prisma.StringNullableListFilter<"Owner">;
    visibility?: Prisma.EnumProfileVisibilityWithAggregatesFilter<"Owner"> | $Enums.ProfileVisibility;
    travel_radius?: Prisma.IntNullableWithAggregatesFilter<"Owner"> | number | null;
    longitude?: Prisma.FloatNullableWithAggregatesFilter<"Owner"> | number | null;
    latitude?: Prisma.FloatNullableWithAggregatesFilter<"Owner"> | number | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"Owner"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"Owner"> | string | null;
    zip_code?: Prisma.StringNullableWithAggregatesFilter<"Owner"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"Owner"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"Owner"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Owner"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Owner"> | Date | string;
};
export type OwnerCreateInput = {
    id?: string;
    email: string;
    auth_provider?: string;
    email_verified?: boolean;
    looking_for?: Prisma.OwnerCreatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerCreatepreferred_meetup_locationsInput | string[];
    visibility?: $Enums.ProfileVisibility;
    travel_radius?: number | null;
    longitude?: number | null;
    latitude?: number | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    petProfile?: Prisma.PetProfileCreateNestedOneWithoutOwnerInput;
};
export type OwnerUncheckedCreateInput = {
    id?: string;
    email: string;
    auth_provider?: string;
    email_verified?: boolean;
    looking_for?: Prisma.OwnerCreatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerCreatepreferred_meetup_locationsInput | string[];
    visibility?: $Enums.ProfileVisibility;
    travel_radius?: number | null;
    longitude?: number | null;
    latitude?: number | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    petProfile?: Prisma.PetProfileUncheckedCreateNestedOneWithoutOwnerInput;
};
export type OwnerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    looking_for?: Prisma.OwnerUpdatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerUpdatepreferred_meetup_locationsInput | string[];
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    travel_radius?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    petProfile?: Prisma.PetProfileUpdateOneWithoutOwnerNestedInput;
};
export type OwnerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    looking_for?: Prisma.OwnerUpdatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerUpdatepreferred_meetup_locationsInput | string[];
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    travel_radius?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    petProfile?: Prisma.PetProfileUncheckedUpdateOneWithoutOwnerNestedInput;
};
export type OwnerCreateManyInput = {
    id?: string;
    email: string;
    auth_provider?: string;
    email_verified?: boolean;
    looking_for?: Prisma.OwnerCreatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerCreatepreferred_meetup_locationsInput | string[];
    visibility?: $Enums.ProfileVisibility;
    travel_radius?: number | null;
    longitude?: number | null;
    latitude?: number | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OwnerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    looking_for?: Prisma.OwnerUpdatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerUpdatepreferred_meetup_locationsInput | string[];
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    travel_radius?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OwnerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    looking_for?: Prisma.OwnerUpdatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerUpdatepreferred_meetup_locationsInput | string[];
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    travel_radius?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OwnerScalarRelationFilter = {
    is?: Prisma.OwnerWhereInput;
    isNot?: Prisma.OwnerWhereInput;
};
export type OwnerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    looking_for?: Prisma.SortOrder;
    preferred_meetup_locations?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    travel_radius?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zip_code?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OwnerAvgOrderByAggregateInput = {
    travel_radius?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
};
export type OwnerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    travel_radius?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zip_code?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OwnerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    travel_radius?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    zip_code?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OwnerSumOrderByAggregateInput = {
    travel_radius?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
};
export type OwnerCreateNestedOneWithoutPetProfileInput = {
    create?: Prisma.XOR<Prisma.OwnerCreateWithoutPetProfileInput, Prisma.OwnerUncheckedCreateWithoutPetProfileInput>;
    connectOrCreate?: Prisma.OwnerCreateOrConnectWithoutPetProfileInput;
    connect?: Prisma.OwnerWhereUniqueInput;
};
export type OwnerUpdateOneRequiredWithoutPetProfileNestedInput = {
    create?: Prisma.XOR<Prisma.OwnerCreateWithoutPetProfileInput, Prisma.OwnerUncheckedCreateWithoutPetProfileInput>;
    connectOrCreate?: Prisma.OwnerCreateOrConnectWithoutPetProfileInput;
    upsert?: Prisma.OwnerUpsertWithoutPetProfileInput;
    connect?: Prisma.OwnerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OwnerUpdateToOneWithWhereWithoutPetProfileInput, Prisma.OwnerUpdateWithoutPetProfileInput>, Prisma.OwnerUncheckedUpdateWithoutPetProfileInput>;
};
export type OwnerCreatelooking_forInput = {
    set: string[];
};
export type OwnerCreatepreferred_meetup_locationsInput = {
    set: string[];
};
export type OwnerUpdatelooking_forInput = {
    set?: string[];
    push?: string | string[];
};
export type OwnerUpdatepreferred_meetup_locationsInput = {
    set?: string[];
    push?: string | string[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type OwnerCreateWithoutPetProfileInput = {
    id?: string;
    email: string;
    auth_provider?: string;
    email_verified?: boolean;
    looking_for?: Prisma.OwnerCreatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerCreatepreferred_meetup_locationsInput | string[];
    visibility?: $Enums.ProfileVisibility;
    travel_radius?: number | null;
    longitude?: number | null;
    latitude?: number | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OwnerUncheckedCreateWithoutPetProfileInput = {
    id?: string;
    email: string;
    auth_provider?: string;
    email_verified?: boolean;
    looking_for?: Prisma.OwnerCreatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerCreatepreferred_meetup_locationsInput | string[];
    visibility?: $Enums.ProfileVisibility;
    travel_radius?: number | null;
    longitude?: number | null;
    latitude?: number | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    country?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OwnerCreateOrConnectWithoutPetProfileInput = {
    where: Prisma.OwnerWhereUniqueInput;
    create: Prisma.XOR<Prisma.OwnerCreateWithoutPetProfileInput, Prisma.OwnerUncheckedCreateWithoutPetProfileInput>;
};
export type OwnerUpsertWithoutPetProfileInput = {
    update: Prisma.XOR<Prisma.OwnerUpdateWithoutPetProfileInput, Prisma.OwnerUncheckedUpdateWithoutPetProfileInput>;
    create: Prisma.XOR<Prisma.OwnerCreateWithoutPetProfileInput, Prisma.OwnerUncheckedCreateWithoutPetProfileInput>;
    where?: Prisma.OwnerWhereInput;
};
export type OwnerUpdateToOneWithWhereWithoutPetProfileInput = {
    where?: Prisma.OwnerWhereInput;
    data: Prisma.XOR<Prisma.OwnerUpdateWithoutPetProfileInput, Prisma.OwnerUncheckedUpdateWithoutPetProfileInput>;
};
export type OwnerUpdateWithoutPetProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    looking_for?: Prisma.OwnerUpdatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerUpdatepreferred_meetup_locationsInput | string[];
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    travel_radius?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OwnerUncheckedUpdateWithoutPetProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    looking_for?: Prisma.OwnerUpdatelooking_forInput | string[];
    preferred_meetup_locations?: Prisma.OwnerUpdatepreferred_meetup_locationsInput | string[];
    visibility?: Prisma.EnumProfileVisibilityFieldUpdateOperationsInput | $Enums.ProfileVisibility;
    travel_radius?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    longitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    latitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OwnerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    auth_provider?: boolean;
    email_verified?: boolean;
    looking_for?: boolean;
    preferred_meetup_locations?: boolean;
    visibility?: boolean;
    travel_radius?: boolean;
    longitude?: boolean;
    latitude?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    country?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    petProfile?: boolean | Prisma.Owner$petProfileArgs<ExtArgs>;
}, ExtArgs["result"]["owner"]>;
export type OwnerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    auth_provider?: boolean;
    email_verified?: boolean;
    looking_for?: boolean;
    preferred_meetup_locations?: boolean;
    visibility?: boolean;
    travel_radius?: boolean;
    longitude?: boolean;
    latitude?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    country?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["owner"]>;
export type OwnerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    auth_provider?: boolean;
    email_verified?: boolean;
    looking_for?: boolean;
    preferred_meetup_locations?: boolean;
    visibility?: boolean;
    travel_radius?: boolean;
    longitude?: boolean;
    latitude?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    country?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["owner"]>;
export type OwnerSelectScalar = {
    id?: boolean;
    email?: boolean;
    auth_provider?: boolean;
    email_verified?: boolean;
    looking_for?: boolean;
    preferred_meetup_locations?: boolean;
    visibility?: boolean;
    travel_radius?: boolean;
    longitude?: boolean;
    latitude?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    country?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OwnerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "auth_provider" | "email_verified" | "looking_for" | "preferred_meetup_locations" | "visibility" | "travel_radius" | "longitude" | "latitude" | "city" | "state" | "zip_code" | "country" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["owner"]>;
export type OwnerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    petProfile?: boolean | Prisma.Owner$petProfileArgs<ExtArgs>;
};
export type OwnerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OwnerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Owner";
    objects: {
        petProfile: Prisma.$PetProfilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        auth_provider: string;
        email_verified: boolean;
        looking_for: string[];
        preferred_meetup_locations: string[];
        visibility: $Enums.ProfileVisibility;
        travel_radius: number | null;
        longitude: number | null;
        latitude: number | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        country: string | null;
        bio: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["owner"]>;
    composites: {};
};
export type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OwnerPayload, S>;
export type OwnerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OwnerCountAggregateInputType | true;
};
export interface OwnerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Owner'];
        meta: {
            name: 'Owner';
        };
    };
    findUnique<T extends OwnerFindUniqueArgs>(args: Prisma.SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OwnerFindFirstArgs>(args?: Prisma.SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OwnerFindManyArgs>(args?: Prisma.SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OwnerCreateArgs>(args: Prisma.SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OwnerCreateManyArgs>(args?: Prisma.SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OwnerDeleteArgs>(args: Prisma.SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OwnerUpdateArgs>(args: Prisma.SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OwnerDeleteManyArgs>(args?: Prisma.SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OwnerUpdateManyArgs>(args: Prisma.SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OwnerUpsertArgs>(args: Prisma.SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma.Prisma__OwnerClient<runtime.Types.Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OwnerCountArgs>(args?: Prisma.Subset<T, OwnerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OwnerCountAggregateOutputType> : number>;
    aggregate<T extends OwnerAggregateArgs>(args: Prisma.Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>;
    groupBy<T extends OwnerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OwnerGroupByArgs['orderBy'];
    } : {
        orderBy?: OwnerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OwnerFieldRefs;
}
export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    petProfile<T extends Prisma.Owner$petProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Owner$petProfileArgs<ExtArgs>>): Prisma.Prisma__PetProfileClient<runtime.Types.Result.GetResult<Prisma.$PetProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OwnerFieldRefs {
    readonly id: Prisma.FieldRef<"Owner", 'String'>;
    readonly email: Prisma.FieldRef<"Owner", 'String'>;
    readonly auth_provider: Prisma.FieldRef<"Owner", 'String'>;
    readonly email_verified: Prisma.FieldRef<"Owner", 'Boolean'>;
    readonly looking_for: Prisma.FieldRef<"Owner", 'String[]'>;
    readonly preferred_meetup_locations: Prisma.FieldRef<"Owner", 'String[]'>;
    readonly visibility: Prisma.FieldRef<"Owner", 'ProfileVisibility'>;
    readonly travel_radius: Prisma.FieldRef<"Owner", 'Int'>;
    readonly longitude: Prisma.FieldRef<"Owner", 'Float'>;
    readonly latitude: Prisma.FieldRef<"Owner", 'Float'>;
    readonly city: Prisma.FieldRef<"Owner", 'String'>;
    readonly state: Prisma.FieldRef<"Owner", 'String'>;
    readonly zip_code: Prisma.FieldRef<"Owner", 'String'>;
    readonly country: Prisma.FieldRef<"Owner", 'String'>;
    readonly bio: Prisma.FieldRef<"Owner", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Owner", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Owner", 'DateTime'>;
}
export type OwnerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    where: Prisma.OwnerWhereUniqueInput;
};
export type OwnerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    where: Prisma.OwnerWhereUniqueInput;
};
export type OwnerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    where?: Prisma.OwnerWhereInput;
    orderBy?: Prisma.OwnerOrderByWithRelationInput | Prisma.OwnerOrderByWithRelationInput[];
    cursor?: Prisma.OwnerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OwnerScalarFieldEnum | Prisma.OwnerScalarFieldEnum[];
};
export type OwnerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    where?: Prisma.OwnerWhereInput;
    orderBy?: Prisma.OwnerOrderByWithRelationInput | Prisma.OwnerOrderByWithRelationInput[];
    cursor?: Prisma.OwnerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OwnerScalarFieldEnum | Prisma.OwnerScalarFieldEnum[];
};
export type OwnerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    where?: Prisma.OwnerWhereInput;
    orderBy?: Prisma.OwnerOrderByWithRelationInput | Prisma.OwnerOrderByWithRelationInput[];
    cursor?: Prisma.OwnerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OwnerScalarFieldEnum | Prisma.OwnerScalarFieldEnum[];
};
export type OwnerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OwnerCreateInput, Prisma.OwnerUncheckedCreateInput>;
};
export type OwnerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OwnerCreateManyInput | Prisma.OwnerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OwnerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    data: Prisma.OwnerCreateManyInput | Prisma.OwnerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OwnerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OwnerUpdateInput, Prisma.OwnerUncheckedUpdateInput>;
    where: Prisma.OwnerWhereUniqueInput;
};
export type OwnerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OwnerUpdateManyMutationInput, Prisma.OwnerUncheckedUpdateManyInput>;
    where?: Prisma.OwnerWhereInput;
    limit?: number;
};
export type OwnerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OwnerUpdateManyMutationInput, Prisma.OwnerUncheckedUpdateManyInput>;
    where?: Prisma.OwnerWhereInput;
    limit?: number;
};
export type OwnerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    where: Prisma.OwnerWhereUniqueInput;
    create: Prisma.XOR<Prisma.OwnerCreateInput, Prisma.OwnerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OwnerUpdateInput, Prisma.OwnerUncheckedUpdateInput>;
};
export type OwnerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
    where: Prisma.OwnerWhereUniqueInput;
};
export type OwnerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OwnerWhereInput;
    limit?: number;
};
export type Owner$petProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PetProfileSelect<ExtArgs> | null;
    omit?: Prisma.PetProfileOmit<ExtArgs> | null;
    include?: Prisma.PetProfileInclude<ExtArgs> | null;
    where?: Prisma.PetProfileWhereInput;
};
export type OwnerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OwnerSelect<ExtArgs> | null;
    omit?: Prisma.OwnerOmit<ExtArgs> | null;
    include?: Prisma.OwnerInclude<ExtArgs> | null;
};
export {};

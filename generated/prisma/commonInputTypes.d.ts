import * as $Enums from "./enums";
import type * as Prisma from "./internal/prismaNamespace";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumPetMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PetMediaType | Prisma.EnumPetMediaTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PetMediaType[] | Prisma.ListEnumPetMediaTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetMediaType[] | Prisma.ListEnumPetMediaTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetMediaTypeFilter<$PrismaModel> | $Enums.PetMediaType;
};
export type EnumPetSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | Prisma.EnumPetSpeciesFieldRefInput<$PrismaModel>;
    in?: $Enums.PetSpecies[] | Prisma.ListEnumPetSpeciesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetSpecies[] | Prisma.ListEnumPetSpeciesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetSpeciesFilter<$PrismaModel> | $Enums.PetSpecies;
};
export type EnumPetGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.PetGender | Prisma.EnumPetGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.PetGender[] | Prisma.ListEnumPetGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetGender[] | Prisma.ListEnumPetGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetGenderFilter<$PrismaModel> | $Enums.PetGender;
};
export type EnumPetSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSize | Prisma.EnumPetSizeFieldRefInput<$PrismaModel>;
    in?: $Enums.PetSize[] | Prisma.ListEnumPetSizeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetSize[] | Prisma.ListEnumPetSizeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetSizeFilter<$PrismaModel> | $Enums.PetSize;
};
export type EnumProfileVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileVisibility | Prisma.EnumProfileVisibilityFieldRefInput<$PrismaModel>;
    in?: $Enums.ProfileVisibility[] | Prisma.ListEnumProfileVisibilityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProfileVisibility[] | Prisma.ListEnumProfileVisibilityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProfileVisibilityFilter<$PrismaModel> | $Enums.ProfileVisibility;
};
export type EnumPetEnergyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PetEnergyLevel | Prisma.EnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PetEnergyLevel[] | Prisma.ListEnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PetEnergyLevel[] | Prisma.ListEnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPetEnergyLevelNullableFilter<$PrismaModel> | $Enums.PetEnergyLevel | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumPetMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetMediaType | Prisma.EnumPetMediaTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PetMediaType[] | Prisma.ListEnumPetMediaTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetMediaType[] | Prisma.ListEnumPetMediaTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.PetMediaType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetMediaTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetMediaTypeFilter<$PrismaModel>;
};
export type EnumPetSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | Prisma.EnumPetSpeciesFieldRefInput<$PrismaModel>;
    in?: $Enums.PetSpecies[] | Prisma.ListEnumPetSpeciesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetSpecies[] | Prisma.ListEnumPetSpeciesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.PetSpecies;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetSpeciesFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetSpeciesFilter<$PrismaModel>;
};
export type EnumPetGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetGender | Prisma.EnumPetGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.PetGender[] | Prisma.ListEnumPetGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetGender[] | Prisma.ListEnumPetGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetGenderWithAggregatesFilter<$PrismaModel> | $Enums.PetGender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetGenderFilter<$PrismaModel>;
};
export type EnumPetSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSize | Prisma.EnumPetSizeFieldRefInput<$PrismaModel>;
    in?: $Enums.PetSize[] | Prisma.ListEnumPetSizeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetSize[] | Prisma.ListEnumPetSizeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetSizeWithAggregatesFilter<$PrismaModel> | $Enums.PetSize;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetSizeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetSizeFilter<$PrismaModel>;
};
export type EnumProfileVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileVisibility | Prisma.EnumProfileVisibilityFieldRefInput<$PrismaModel>;
    in?: $Enums.ProfileVisibility[] | Prisma.ListEnumProfileVisibilityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProfileVisibility[] | Prisma.ListEnumProfileVisibilityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProfileVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.ProfileVisibility;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProfileVisibilityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProfileVisibilityFilter<$PrismaModel>;
};
export type EnumPetEnergyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetEnergyLevel | Prisma.EnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PetEnergyLevel[] | Prisma.ListEnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PetEnergyLevel[] | Prisma.ListEnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPetEnergyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.PetEnergyLevel | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetEnergyLevelNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetEnergyLevelNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumPetMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PetMediaType | Prisma.EnumPetMediaTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PetMediaType[] | Prisma.ListEnumPetMediaTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetMediaType[] | Prisma.ListEnumPetMediaTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetMediaTypeFilter<$PrismaModel> | $Enums.PetMediaType;
};
export type NestedEnumPetSpeciesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | Prisma.EnumPetSpeciesFieldRefInput<$PrismaModel>;
    in?: $Enums.PetSpecies[] | Prisma.ListEnumPetSpeciesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetSpecies[] | Prisma.ListEnumPetSpeciesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetSpeciesFilter<$PrismaModel> | $Enums.PetSpecies;
};
export type NestedEnumPetGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.PetGender | Prisma.EnumPetGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.PetGender[] | Prisma.ListEnumPetGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetGender[] | Prisma.ListEnumPetGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetGenderFilter<$PrismaModel> | $Enums.PetGender;
};
export type NestedEnumPetSizeFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSize | Prisma.EnumPetSizeFieldRefInput<$PrismaModel>;
    in?: $Enums.PetSize[] | Prisma.ListEnumPetSizeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetSize[] | Prisma.ListEnumPetSizeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetSizeFilter<$PrismaModel> | $Enums.PetSize;
};
export type NestedEnumProfileVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileVisibility | Prisma.EnumProfileVisibilityFieldRefInput<$PrismaModel>;
    in?: $Enums.ProfileVisibility[] | Prisma.ListEnumProfileVisibilityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProfileVisibility[] | Prisma.ListEnumProfileVisibilityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProfileVisibilityFilter<$PrismaModel> | $Enums.ProfileVisibility;
};
export type NestedEnumPetEnergyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PetEnergyLevel | Prisma.EnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PetEnergyLevel[] | Prisma.ListEnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PetEnergyLevel[] | Prisma.ListEnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPetEnergyLevelNullableFilter<$PrismaModel> | $Enums.PetEnergyLevel | null;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumPetMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetMediaType | Prisma.EnumPetMediaTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.PetMediaType[] | Prisma.ListEnumPetMediaTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetMediaType[] | Prisma.ListEnumPetMediaTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.PetMediaType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetMediaTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetMediaTypeFilter<$PrismaModel>;
};
export type NestedEnumPetSpeciesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSpecies | Prisma.EnumPetSpeciesFieldRefInput<$PrismaModel>;
    in?: $Enums.PetSpecies[] | Prisma.ListEnumPetSpeciesFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetSpecies[] | Prisma.ListEnumPetSpeciesFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetSpeciesWithAggregatesFilter<$PrismaModel> | $Enums.PetSpecies;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetSpeciesFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetSpeciesFilter<$PrismaModel>;
};
export type NestedEnumPetGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetGender | Prisma.EnumPetGenderFieldRefInput<$PrismaModel>;
    in?: $Enums.PetGender[] | Prisma.ListEnumPetGenderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetGender[] | Prisma.ListEnumPetGenderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetGenderWithAggregatesFilter<$PrismaModel> | $Enums.PetGender;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetGenderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetGenderFilter<$PrismaModel>;
};
export type NestedEnumPetSizeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetSize | Prisma.EnumPetSizeFieldRefInput<$PrismaModel>;
    in?: $Enums.PetSize[] | Prisma.ListEnumPetSizeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.PetSize[] | Prisma.ListEnumPetSizeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumPetSizeWithAggregatesFilter<$PrismaModel> | $Enums.PetSize;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetSizeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetSizeFilter<$PrismaModel>;
};
export type NestedEnumProfileVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProfileVisibility | Prisma.EnumProfileVisibilityFieldRefInput<$PrismaModel>;
    in?: $Enums.ProfileVisibility[] | Prisma.ListEnumProfileVisibilityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ProfileVisibility[] | Prisma.ListEnumProfileVisibilityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumProfileVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.ProfileVisibility;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumProfileVisibilityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumProfileVisibilityFilter<$PrismaModel>;
};
export type NestedEnumPetEnergyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetEnergyLevel | Prisma.EnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PetEnergyLevel[] | Prisma.ListEnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PetEnergyLevel[] | Prisma.ListEnumPetEnergyLevelFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPetEnergyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.PetEnergyLevel | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPetEnergyLevelNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPetEnergyLevelNullableFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};

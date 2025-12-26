import { UsersType } from "../types/Types";

type NewObjPropsType = {
    followed: boolean;
};

export const UpdateObjectInArray = (
    items: UsersType[],
    itemId: number,
    objPropName: keyof UsersType,
    newObjProps: NewObjPropsType
): UsersType[] => {
    return items.map(u =>
        u[objPropName] === itemId ? { ...u, ...newObjProps } : u
    );
};

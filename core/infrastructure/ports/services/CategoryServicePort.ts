import { LimitProp, PageProp, UpdatedField } from "@/commons/api.base"
import { OperationStatus } from "@/commons/operation-status.base"
import { ImageUrl } from "@/commons/value-objects.base"
import { CategoryEntity } from "@/domains/category/domain/CategoryEntity"
import { CategoryId, CategoryName } from "@/domains/category/domain/ValueObjects"


export interface CategoryServicePort {
    create(createProps: CreateCategoryProps): Promise<CreateCategoryResponse>
    update(updateProps: UpdateCategoryProps): Promise<UpdateCategoryResponse>
    delete(deleteProps: DeleteCategoryProps): Promise<DeleteCategoryResponse>
    load(loadProps: LoadCategoryProps): Promise<LoadCategoryResponse>
    find(findProps: FindCategoryProps): Promise<FindCategoryResponse>

}

export interface CreateCategoryProps {
    name: CategoryName,
    id: CategoryId,
    image: ImageUrl
}

export interface UpdateCategoryProps {
    id: CategoryId,
    updatedFields: UpdatedField
}
export interface DeleteCategoryProps {
    id: CategoryId
}
export interface LoadCategoryProps {
    page: PageProp,
    limit: LimitProp
}

export interface FindCategoryProps {
    id: CategoryId
}

export interface CreateCategoryResponse {
    status: OperationStatus
}

export interface UpdateCategoryResponse {
    status: OperationStatus
}

export interface DeleteCategoryResponse {
    status: OperationStatus
}

export interface LoadCategoryResponse {
    data: CategoryEntity[],
    status: OperationStatus
}

export interface FindCategoryResponse {
    data: CategoryEntity,
    status: OperationStatus

}


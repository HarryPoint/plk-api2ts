import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/文件对象相关/pageUsingPOST_1
*/
export default function fetchMethod(options: { data: IFileObjectPagingQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationFileObjectPagingQueryResponseDTO>(
        {
            url: "/masterdata-service/fileObject/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 文件对象分页查询请求DTO */
export interface IFileObjectPagingQueryRequestDTO {
    /** 当前页面 */
    pageNo?: number;
    /** 文件来源 */
    fileForm?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 创建用户ID列表 */
    createUserIds?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 文件名 */
    name?: string;
    /** 文件分类ID列表 */
    fileCategoryIdList?: string[];
    /** 创建时间-开始 */
    createTimeBegin?: number;
    /** 创建时间-开始 */
    createTimeEnd?: number;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«文件对象分页查询响应DTO»» */
export interface IJSONResultPagingInformationFileObjectPagingQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationFileObjectPageQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«文件对象分页查询响应DTO» */
export interface IPageInformationFileObjectPageQueryResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IFileObjectPagingQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationFileObjectPageQueryResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationFileObjectPageQueryResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 文件对象分页查询响应DTO */
export interface IFileObjectPagingQueryResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** ID */
    id?: string;
    /** 文件名 */
    name?: string;
    /** 文件分类ID */
    fileCategoryId?: string;
    /** 文件分类名称 */
    fileCategoryName?: string;
    /** 文件大小 */
    fileSize?: string;
    /** 文件来源 */
    fileForm?: string;
    /** 文件Key */
    fileKeys?: Record<string, any>[];
    /** 权限列表 */
    permissionTypeList?: EFileObjectPagingQueryResponseDTO_permissionTypeList_items[];
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationFileObjectPageQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationFileObjectPageQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFileObjectPagingQueryResponseDTO_permissionTypeList_items {
    CATEGORY_EDIT = "CATEGORY_EDIT",
    CATEGORY_MOVE = "CATEGORY_MOVE",
    CATEGORY_REMOVE = "CATEGORY_REMOVE",
    UPLOAD_FILE = "UPLOAD_FILE",
    CATEGORY_VIEW = "CATEGORY_VIEW",
    FILE_RENAME = "FILE_RENAME",
    FILE_DOWNLOAD = "FILE_DOWNLOAD",
    FILE_MOVE = "FILE_MOVE",
    FILE_REMOVE = "FILE_REMOVE"
}

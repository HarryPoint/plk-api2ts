import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/文件分类相关/getTreeByIdUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultFileClassificationDetailResponseDTO1>(
        {
            url: "/masterdata-service/fileCategory/getTreeById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«文件分类明细响应DTO»_1 */
export interface IJSONResultFileClassificationDetailResponseDTO1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFileClassificationDetailsRespondToDTO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 文件分类明细响应DTO_1 */
export interface IFileClassificationDetailsRespondToDTO1 {
    /** 下级树列表 */
    childList?: IFileClassificationDetailsRespondToDTO6[];
    /** 创建人ID */
    createUserId?: string;
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 用户权限列表 */
    userPermissionList?: EFileClassificationDetailsRespondToDTO1_userPermissionList_items[];
}
/** 文件分类明细响应DTO_6 */
export interface IFileClassificationDetailsRespondToDTO6 {
    /** 下级树列表 */
    childList?: IFileClassificationDetailsRespondToDTO6[];
    /** 创建人ID */
    createUserId?: string;
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 用户权限列表 */
    userPermissionList?: EFileClassificationDetailsRespondToDTO6_userPermissionList_items[];
}

export enum EFileClassificationDetailsRespondToDTO1_userPermissionList_items {
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

export enum EFileClassificationDetailsRespondToDTO6_userPermissionList_items {
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

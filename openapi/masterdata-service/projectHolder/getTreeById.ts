import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/项目文件夹相关/getTreeByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string; projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultFileClassificationDetailResponseDTO2>(
        {
            url: "/masterdata-service/projectHolder/getTreeById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«文件分类明细响应DTO»_2 */
export interface IJSONResultFileClassificationDetailResponseDTO2 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFileClassificationDetailsRespondToDTO9;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 文件分类明细响应DTO_9 */
export interface IFileClassificationDetailsRespondToDTO9 {
    /** 下级树列表 */
    childList?: IFileClassificationDetailsRespondToDTO12[];
    /** 创建人ID */
    createUserId?: string;
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 项目ID */
    projectId?: string;
    /** 用户权限列表 */
    userPermissionList?: EFileClassificationDetailsRespondToDTO9_userPermissionList_items[];
}
/** 文件分类明细响应DTO_12 */
export interface IFileClassificationDetailsRespondToDTO12 {
    /** 下级树列表 */
    childList?: IFileClassificationDetailsRespondToDTO12[];
    /** 创建人ID */
    createUserId?: string;
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 项目ID */
    projectId?: string;
    /** 用户权限列表 */
    userPermissionList?: EFileClassificationDetailsRespondToDTO12_userPermissionList_items[];
}

export enum EFileClassificationDetailsRespondToDTO9_userPermissionList_items {
    FOLDER_EDIT = "FOLDER_EDIT",
    FOLDER_MOVE = "FOLDER_MOVE",
    FOLDER_REMOVE = "FOLDER_REMOVE",
    UPLOAD_FILE = "UPLOAD_FILE",
    FOLDER_VIEW = "FOLDER_VIEW",
    FILE_RENAME = "FILE_RENAME",
    FILE_DOWNLOAD = "FILE_DOWNLOAD",
    FILE_MOVE = "FILE_MOVE",
    FILE_REMOVE = "FILE_REMOVE"
}

export enum EFileClassificationDetailsRespondToDTO12_userPermissionList_items {
    FOLDER_EDIT = "FOLDER_EDIT",
    FOLDER_MOVE = "FOLDER_MOVE",
    FOLDER_REMOVE = "FOLDER_REMOVE",
    UPLOAD_FILE = "UPLOAD_FILE",
    FOLDER_VIEW = "FOLDER_VIEW",
    FILE_RENAME = "FILE_RENAME",
    FILE_DOWNLOAD = "FILE_DOWNLOAD",
    FILE_MOVE = "FILE_MOVE",
    FILE_REMOVE = "FILE_REMOVE"
}

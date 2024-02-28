import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16700/doc.html#/default/项目文件夹相关/getUserTreeListUsingGET_1
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultListFileClassificationDetailsResponseDTO9>(
        {
            url: "/masterdata-service/projectHolder/getUserTreeList",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«文件分类明细响应DTO»»_9 */
export interface IJSONResultListFileClassificationDetailsResponseDTO9 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFileClassificationDetailsRespondToDTO12[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 文件分类明细响应DTO_12 */
export interface IFileClassificationDetailsRespondToDTO12 {
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 创建人ID */
    createUserId?: string;
    /** 项目ID */
    projectId?: string;
    /** 下级树列表 */
    childList?: IFileClassificationDetailsRespondToDTO12[];
    /** 用户权限列表 */
    userPermissionList?: EFileClassificationDetailsRespondToDTO12_userPermissionList_items[];
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

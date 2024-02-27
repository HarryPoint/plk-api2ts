import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/文件对象相关/getMoveToSelectTreeListUsingGET_1
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListFileClassificationDetailResponseDTO3>(
        {
            url: "/masterdata-service/fileObject/getMoveToSelectTreeList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«文件分类明细响应DTO»»_3 */
export interface IJSONResultListFileClassificationDetailResponseDTO3 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFileClassificationDetailsRespondToDTO6[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 文件分类明细响应DTO_6 */
export interface IFileClassificationDetailsRespondToDTO6 {
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 创建人ID */
    createUserId?: string;
    /** 下级树列表 */
    childList?: IFileClassificationDetailsRespondToDTO6[];
    /** 用户权限列表 */
    userPermissionList?: EFileClassificationDetailsRespondToDTO6_userPermissionList_items[];
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

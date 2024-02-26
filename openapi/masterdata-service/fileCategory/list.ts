import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/文件分类相关/listUsingGET_3
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListFileCategoryListQueryResponseDTO>(
        {
            url: "/masterdata-service/fileCategory/list",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«FileCategoryListQueryResponseDTO»» */
export interface IJSONResultListFileCategoryListQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFileCategoryListQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** FileCategoryListQueryResponseDTO */
export interface IFileCategoryListQueryResponseDTO {
    /** ID */
    id?: number;
    /** 分类名称 */
    name?: string;
    /** 用户权限列表 */
    userPermissionList?: EFileCategoryListQueryResponseDTO_userPermissionList_items[];
}

export enum EFileCategoryListQueryResponseDTO_userPermissionList_items {
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

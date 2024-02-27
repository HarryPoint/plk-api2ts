import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目文件夹相关/listUsingGET_5
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectFolderListQueryResponseDTO>(
        {
            url: "/masterdata-service/projectHolder/list",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProjectFolderListQueryResponseDTO»» */
export interface IJSONResultListProjectFolderListQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectFolderListQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProjectFolderListQueryResponseDTO */
export interface IProjectFolderListQueryResponseDTO {
    /** ID */
    id?: string;
    /** 分类名称 */
    name?: string;
    /** 项目ID */
    projectId?: string;
    /** 用户权限列表 */
    userPermissionList?: EProjectFolderListQueryResponseDTO_userPermissionList_items[];
}

export enum EProjectFolderListQueryResponseDTO_userPermissionList_items {
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

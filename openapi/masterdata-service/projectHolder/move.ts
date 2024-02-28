import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16700/doc.html#/default/项目文件夹相关/moveUsingPOST_3
*/
export default function fetchMethod(options: { data: IProjectFolderMoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/projectHolder/move",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ProjectFolderMoveRequestDTO */
export interface IProjectFolderMoveRequestDTO {
    /** 当前项目文件夹ID */
    id?: string;
    /** 移动目标文件夹ID */
    targetProjectFolderId?: string;
    /** 项目ID */
    projectId?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultstring1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring1_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring1_data {
    Y = "Y",
    N = "N"
}
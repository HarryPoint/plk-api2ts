import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/项目文件相关/renameUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectFileRenameRequestDTO }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/projectFile/rename",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ProjectFileRenameRequestDTO */
export interface IProjectFileRenameRequestDTO {
    /** 文件名称 */
    fileName?: string;
    /** 项目文件ID */
    projectFileId?: string;
    /** 项目ID */
    projectId?: string;
}
/** JSONResult«string»_1 */
export interface IJSONResultString1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: EJSONResultString1_data;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultString1_data {
    Y = "Y",
    N = "N"
}

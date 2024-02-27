import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目文件相关/renameUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectFileRenameRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/projectFile/rename",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** ProjectFileRenameRequestDTO */
export interface IProjectFileRenameRequestDTO {
    /** 项目文件ID */
    projectFileId?: string;
    /** 文件名称 */
    fileName?: string;
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

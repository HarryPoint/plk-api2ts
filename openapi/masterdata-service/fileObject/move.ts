import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/文件对象相关/moveUsingPOST_1
*/
export default function fetchMethod(options: { data: IFileObjectMoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultString1>(
        {
            url: "/masterdata-service/fileObject/move",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** FileObjectMoveRequestDTO */
export interface IFileObjectMoveRequestDTO {
    /** 文件对象ID */
    fileObjectId?: string;
    /** 目标文件分类ID */
    targetFileCategoryId?: string;
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

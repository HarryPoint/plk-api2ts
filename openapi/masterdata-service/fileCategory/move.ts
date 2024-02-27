import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/文件分类相关/moveUsingPOST
*/
export default function fetchMethod(options: { data: IFileCategoryMoveRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring1>(
        {
            url: "/masterdata-service/fileCategory/move",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** FileCategoryMoveRequestDTO */
export interface IFileCategoryMoveRequestDTO {
    /** 当前文件分类ID */
    id?: string;
    /** 移动目标文件分类ID */
    targetFileCategoryId?: string;
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

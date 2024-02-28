import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/航发相关/syncTodolistDeletedUsingPOST
*/
export default function fetchMethod(options: { data: IKingdeeBacklogActionRequest }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/hangFa/syncTodolistDeleted",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 金蝶待办动作请求 */
export interface IKingdeeBacklogActionRequest {
    /** 待办id */
    id: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

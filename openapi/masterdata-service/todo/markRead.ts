import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/代办相关/markReadUsingPOST
*/
export default function fetchMethod(options: { data: IToDoMarkReadRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/todo/markRead",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ToDoMarkReadRequestDTO */
export interface IToDoMarkReadRequestDTO {
    /** 用户ID不能为空 */
    userId?: string;
    /** 是否全部标记已读 */
    isAll: EToDoMarkReadRequestDTO_isAll;
    /** 单个标记id，isAll=N时必传 */
    id?: string;
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

export enum EToDoMarkReadRequestDTO_isAll {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

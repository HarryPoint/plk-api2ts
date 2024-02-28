import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/removeByBusinessIdUsingPOST
*/
export default function fetchMethod(options: { data: IIdInformation, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/todo-service/todoList/removeByBusinessId",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id信息 */
export interface IIdInformation {
    /** id */
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

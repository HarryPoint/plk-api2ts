import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/航发相关/syncTodolistUsingPOST
*/
export default function fetchMethod(options: { data: IKingdeeBacklogCreateRequest }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/hangFa/syncTodolist",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 金蝶待办创建请求 */
export interface IKingdeeBacklogCreateRequest {
    /** 待办内容 */
    content: string;
    /** 待办执行人 */
    employeeId: string;
    /** 待办id，需保证唯一 */
    id: string;
    /** 标题 */
    title: string;
    /** 跳转完整url */
    url: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

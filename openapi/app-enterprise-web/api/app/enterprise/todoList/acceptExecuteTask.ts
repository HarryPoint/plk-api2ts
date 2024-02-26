import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/待办相关/acceptExecuteTaskUsingPOST
*/
export default function fetchMethod(options: { data: IIdInformation }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/todoList/acceptExecuteTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** id信息 */
export interface IIdInformation {
    /** id */
    id?: number;
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
    ts?: number;
}

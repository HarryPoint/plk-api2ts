import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/待办相关/completeCarbonCopyUsingPOST
*/
export default function fetchMethod(options: { data: ICcToDoChangeReadDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/todoList/completeCarbonCopy",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 待办抄送变更已读DTO */
export interface ICcToDoChangeReadDTO {
    /** 是否全部标记已读 */
    isAll: ECcToDoChangeReadDTO_isAll;
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

export enum ECcToDoChangeReadDTO_isAll {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

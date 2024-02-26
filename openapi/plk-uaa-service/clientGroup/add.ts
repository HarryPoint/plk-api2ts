import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/客户端组相关/addUsingPOST_1
*/
export default function fetchMethod(options: { data: ITheDTOIsAddedToTheClientGroup }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/clientGroup/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 客户端组新增 DTO */
export interface ITheDTOIsAddedToTheClientGroup {
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
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

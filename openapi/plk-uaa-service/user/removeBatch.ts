import { http } from "@/api/http";

/**
* @link http://47.108.139.107:18100/doc.html#/default/用户账号相关/removeBatchUsingPOST_1
*/
export default function fetchMethod(options: { data: IIdSetInformation }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/user/removeBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** id集 信息 */
export interface IIdSetInformation {
    /** id集 */
    ids: string[];
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

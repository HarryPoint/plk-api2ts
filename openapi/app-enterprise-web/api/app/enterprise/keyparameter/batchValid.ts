import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16400/doc.html#/default/关键参数相关/batchValidUsingPOST_1
*/
export default function fetchMethod(options: { data: IEnableOrDisableVOInBatches }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/keyparameter/batchValid",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 批量启用or停用VO */
export interface IEnableOrDisableVOInBatches {
    /** id集合 */
    ids: string[];
    /** 状态 */
    dataStatus: number;
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

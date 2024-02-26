import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/产能相关/batchValidUsingPOST
*/
export default function fetchMethod(data: IEnableOrDisableVOInBatches, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/capacity/batchValid",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 批量启用or停用VO */
export interface IEnableOrDisableVOInBatches {
    /** id集合 */
    ids: number[];
    /** 状态 */
    dataStatus: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/margeUsingPOST_1
*/
export default function fetchMethod(options: { data: IBatchOrderConsolidationDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/marge",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 批次订单合并DTO */
export interface IBatchOrderConsolidationDTO {
    /** wip状态记录id集 */
    wipRpIds?: number[];
    /** 备注 */
    remark?: string;
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

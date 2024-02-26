import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/安全库存变更申请相关/examineUsingPOST
*/
export default function fetchMethod(data: ISecurityInventoryChangeRequestReviewDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStockExchangeApply/examine",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 安全库存变更申请审核DTO */
export interface ISecurityInventoryChangeRequestReviewDTO {
    /** id */
    id?: number;
    /** 审核类型 */
    examineType?: string;
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

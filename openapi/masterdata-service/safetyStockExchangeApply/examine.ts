import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/安全库存变更申请相关/examineUsingPOST
*/
export default function fetchMethod(options: { data: ISecurityInventoryChangeRequestReviewDTO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/safetyStockExchangeApply/examine",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存变更申请审核DTO */
export interface ISecurityInventoryChangeRequestReviewDTO {
    /** id */
    id?: string;
    /** 审核类型 */
    examineType?: ESecurityInventoryChangeRequestReviewDTO_examineType;
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

export enum ESecurityInventoryChangeRequestReviewDTO_examineType {
    /** 审核通过 */
    PASS = "PASS",
    /** 审核拒绝 */
    REFUSE = "REFUSE"
}

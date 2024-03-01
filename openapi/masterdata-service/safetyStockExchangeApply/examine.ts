import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/安全库存变更申请相关/examineUsingPOST
*/
export default function fetchMethod(options: { data: ISecurityInventoryChangeRequestReviewDTO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/safetyStockExchangeApply/examine",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存变更申请审核DTO */
export interface ISecurityInventoryChangeRequestReviewDTO {
    /** 审核类型 */
    examineType?: ESecurityInventoryChangeRequestReviewDTO_examineType;
    /** id */
    id?: string;
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

export enum ESecurityInventoryChangeRequestReviewDTO_examineType {
    /** 审核通过 */
    PASS = "PASS",
    /** 审核拒绝 */
    REFUSE = "REFUSE"
}

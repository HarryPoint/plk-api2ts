import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/产品订单相关/trialDelayAddUsingPOST
*/
export default function fetchMethod(options: { data: ITrialProductOrderExtensionNewRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/productOrder/trialDelayAdd",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 试用产品订单延期新增请求对象 */
export interface ITrialProductOrderExtensionNewRequestObject {
    /** 购买账号数 */
    buyAccountQuantity?: number;
    /** 延长时长(天) */
    delayDurationQuantity?: number;
    /** 延期原因 */
    delayReason?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 预计到期日期 */
    planExpireTime?: number;
    /** 产品模块 */
    productModuleArray?: string[];
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

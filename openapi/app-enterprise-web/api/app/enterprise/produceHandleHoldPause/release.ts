import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16400/doc.html#/default/生产处理暂扣相关/releaseUsingPOST
*/
export default function fetchMethod(options: { data: ITheProductionProcessHoldsTheReleaseRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceHandleHoldPause/release",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理暂扣放行请求对象 */
export interface ITheProductionProcessHoldsTheReleaseRequestObject {
    /** 生产处理id */
    id?: string;
    /** 处理意见 */
    handleRemark?: string;
    /** 放行数量 */
    abnormalQuantity: number;
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

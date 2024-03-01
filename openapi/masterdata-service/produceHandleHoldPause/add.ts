import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/生产处理暂扣相关/addUsingPOST_4
*/
export default function fetchMethod(options: { data: ITheProductionProcessingWithholdAddsTheRequestObject }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceHandleHoldPause/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理暂扣添加请求对象 */
export interface ITheProductionProcessingWithholdAddsTheRequestObject {
    /** 暂扣数量 */
    abnormalQuantity?: number;
    /** 描述 */
    description?: string;
    /** 图片key集合 */
    imageKeys?: string[];
    /** 对应批次id */
    lotOrderId?: string;
    /** 返工类型id */
    produceAbnormalCategoryId: string;
    /** 生产任务id */
    produceTaskId: string;
    /** 标签id集合 */
    tagIds?: string[];
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

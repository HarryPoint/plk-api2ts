import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产订单操作日志相关/getListByProduceOrderIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; produceOrderId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionOrderDetailsOperationLogVO>(
        {
            url: "/masterdata-service/produceOrderOperateLog/getListByProduceOrderId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产订单详情 - 操作日志VO»» */
export interface IJSONResultListProductionOrderDetailsOperationLogVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrderDetailsOperationLogVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单详情 - 操作日志VO */
export interface IProductionOrderDetailsOperationLogVO {
    /** 操作人id */
    operateUserId?: string;
    /** 操作人名称 */
    operateUsername?: string;
    /** 操作时间 */
    operateTime?: number;
    /** 操作内容 */
    operateContent?: string;
}

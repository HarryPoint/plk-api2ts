import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/生产处理暂扣相关/scrapUsingPOST
*/
export default function fetchMethod(options: { data: IProductionProcessesWithholdScrapRequestObjects }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceHandleHoldPause/scrap",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理暂扣报废请求对象 */
export interface IProductionProcessesWithholdScrapRequestObjects {
    /** 报废数量 */
    abnormalQuantity: number;
    /** 处理意见 */
    handleRemark?: string;
    /** 生产处理id */
    id?: string;
    /** 返工类型id */
    produceAbnormalCategoryId: string;
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

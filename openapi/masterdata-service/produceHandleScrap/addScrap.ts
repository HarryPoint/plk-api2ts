import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产报废服务相关/addScrapUsingPOST
*/
export default function fetchMethod(options: { data: IProductionScrapTreatment, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceHandleScrap/addScrap",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产报废处理 */
export interface IProductionScrapTreatment {
    /** 生产任务id */
    produceTaskId: string;
    /** 生产异常类型id */
    produceAbnormalCategoryId: string;
    /** 报废数量 */
    abnormalQuantity: number;
    /** 标签id集合 */
    tagIds?: string[];
    /** 图片key集合 */
    imageKeys?: string[];
    /** 描述 */
    description?: string;
    /** 对应批次id */
    lotOrderId?: string;
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

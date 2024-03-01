import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺文档映射配置/listAllProduceScheduleUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionScheduleVO>(
        {
            url: "/masterdata-service/processDocumentMapConfig/listAllProduceSchedule",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产排期VO»» */
export interface IJSONResultListProductionScheduleVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionScheduleVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产排期VO */
export interface IProductionScheduleVO {
    /** 生产开始时间 */
    beginTime?: number;
    /** 生产结束时间 */
    endTime?: number;
    /** 生产区域ids */
    produceAreaIdList?: string[];
    /** 生产物料ids */
    produceMaterialIdList?: string[];
}

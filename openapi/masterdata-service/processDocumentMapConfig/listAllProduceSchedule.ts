import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺文档映射配置/listAllProduceScheduleUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultListProductionScheduleVO>(
        {
            url: "/masterdata-service/processDocumentMapConfig/listAllProduceSchedule",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产排期VO»» */
export interface IJSONResultListProductionScheduleVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionScheduleVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产排期VO */
export interface IProductionScheduleVO {
    /** 生产开始时间 */
    beginTime?: string;
    /** 生产结束时间 */
    endTime?: string;
    /** 生产物料ids */
    produceMaterialIdList?: number[];
    /** 生产区域ids */
    produceAreaIdList?: number[];
}

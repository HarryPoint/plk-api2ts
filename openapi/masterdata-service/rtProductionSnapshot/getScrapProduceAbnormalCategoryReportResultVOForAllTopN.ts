import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getScrapProduceAbnormalCategoryReportResultVOForAllTopNUsingGET
*/
export default function fetchMethod(options: { params: { beginTime?: number; endTime?: number; enterpriseId?: string; top?: number } }, extraOptions?: any) {
    return http<IJSONResultListScrapTypeStatisticsReturnVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getScrapProduceAbnormalCategoryReportResultVOForAllTopN",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«报废类型统计返回VO»» */
export interface IJSONResultListScrapTypeStatisticsReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IScrapTypeStatisticsReturnVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 报废类型统计返回VO */
export interface IScrapTypeStatisticsReturnVO {
    /** 异常分类id */
    produceAbnormalCategoryId?: string;
    /** 报废数量 */
    scrapQuantity?: number;
}

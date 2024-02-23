import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产快照相关/getScrapProduceAbnormalCategoryReportResultVOForAllTopNUsingGET
export default function fetchMethod(params: { beginTime: string; endTime: string; enterpriseId: number; top: number }, extraOptions?: any) {
    return http<IJSONResultListScrapTypeStatisticsReturnVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getScrapProduceAbnormalCategoryReportResultVOForAllTopN",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«List«报废类型统计返回VO»»
export interface IJSONResultListScrapTypeStatisticsReturnVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IScrapTypeStatisticsReturnVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 报废类型统计返回VO
export interface IScrapTypeStatisticsReturnVO {
    // 异常分类id
    produceAbnormalCategoryId: number;
    // 报废数量
    scrapQuantity: number;
}

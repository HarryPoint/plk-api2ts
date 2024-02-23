import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产快照相关/getFpyRateReportResultVOForDayUsingGET
export default function fetchMethod(params: { beginTime: string; endTime: string; enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListReturnVOToThePassthroughReport>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getFpyRateReportResultVOForDay",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«List«直通报表返回VO»»
export interface IJSONResultListReturnVOToThePassthroughReport {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePassThroughReportReturnsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 直通报表返回VO
export interface IThePassThroughReportReturnsVO {
    // 数据时间（时间戳），根据当前选中的时间粒度去转换时间
    dataTime: string;
    // 所有工序报废
    scrapQuantity: number;
    // 最后工序合格产出
    completeProduceQuantity: number;
    // 直通率
    fpyRatio: number;
    // 直通率-大屏展示
    fpyRatioScale2: number;
}

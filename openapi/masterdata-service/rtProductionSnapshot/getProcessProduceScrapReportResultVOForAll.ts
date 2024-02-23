import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产快照相关/getProcessProduceScrapReportResultVOForAllUsingPOST
export default function fetchMethod(data: number[], params: { beginTime: string; endTime: string; enterpriseId: number }) {
    return http<IJSONResultListProcessOutputScrapStatisticsAreReturnedToVO>({
        url: "/masterdata-service/rtProductionSnapshot/getProcessProduceScrapReportResultVOForAll",
        method: "post",
        data,
        params,
    });
}
// JSONResult«List«工序产出报废统计返回VO»»
export interface IJSONResultListProcessOutputScrapStatisticsAreReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessOutputScrapStatisticsAreReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序产出报废统计返回VO
export interface IProcessOutputScrapStatisticsAreReturnedToVO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 工序产出数
    produceQuantity: number;
    // 报废数
    scrapQuantity: number;
}

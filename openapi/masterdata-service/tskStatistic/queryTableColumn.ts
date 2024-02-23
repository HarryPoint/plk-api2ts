import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/tsk数采数据相关/queryTableColumnUsingGET_2
export default function fetchMethod() {
    return get<IJSONResultListTskStatisticReportTableColumnBO['data']>({
      url: "/masterdata-service/tskStatistic/queryTableColumn",
    });
}
// JSONResult«List«TskStatisticReportTableColumnBO»»
export interface IJSONResultListTskStatisticReportTableColumnBO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITskStatisticReportTableColumnBO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// TskStatisticReportTableColumnBO
export interface ITskStatisticReportTableColumnBO {
}

import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/导出相关/getProductionDataReportExportInfoByTicketUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IJSONResultExportInformationOutputDataStatisticsReturnVO['data']>({
      url: "/masterdata-service/exportAuth/getProductionDataReportExportInfoByTicket",
      params,
    });
}
// JSONResult«导出信息«产出数据统计返回VO»»
export interface IJSONResultExportInformationOutputDataStatisticsReturnVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationOutputDataStatisticsReturnVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«产出数据统计返回VO»
export interface IExportInformationOutputDataStatisticsReturnVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IOutputDataStatisticsAreReturnedToVO[];
}
// 产出数据统计返回VO
export interface IOutputDataStatisticsAreReturnedToVO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 所有工序产出数
    allQuantity: number;
    // 工序产出信息集
    processList: ITheProcessOutputStatisticsReportIsReturnedToVO[];
}
// 工序产出统计报表返回VO
export interface ITheProcessOutputStatisticsReportIsReturnedToVO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 工序产出数
    produceQuantity: number;
}

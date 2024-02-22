import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/导出相关/getWipReportExportInfoByTicketUsingGET
export function fetchMethod(params: { ticket: string }) {
    return get({
      url: "/masterdata-service/exportAuth/getWipReportExportInfoByTicket",
      params,
    });
}
// JSONResult«导出信息«WIP统计报表返回VO»»
export interface IJSONResultExportInformationWIPStatisticsReportReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationWIPStatisticsReportReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«WIP统计报表返回VO»
export interface IExportInformationWIPStatisticsReportReturnsVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: ITheWIPStatisticsReportReturnsVO[];
}
// WIP统计报表返回VO
export interface ITheWIPStatisticsReportReturnsVO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 所有工序库存信息
    allProcessWarehouse: IWIPInventoryStatisticsReportReturnsVO;
    // 工序信息集
    processList: IWIPProcessStatisticsReportReturnsVO[];
}
// WIP库存统计报表返回VO
export interface IWIPInventoryStatisticsReportReturnsVO {
    // 总数
    totalQuantity: number;
    // 正常总数
    normalTotalQuantity: number;
    // 异常总数
    exceptionTotalQuantity: number;
    // 在制前总数
    beforeTotalQuantity: number;
    // 在制前正常数
    beforeNormalQuantity: number;
    // 在制前异常数
    beforeExceptionQuantity: number;
    // 在制中总数
    inTotalQuantity: number;
    // 在制中正常数
    inNormalQuantity: number;
    // 在制中异常数
    inExceptionQuantity: number;
}
// WIP工序统计报表返回VO
export interface IWIPProcessStatisticsReportReturnsVO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 工序库存集
    warehouse: IWIPInventoryStatisticsReportReturnsVO;
}

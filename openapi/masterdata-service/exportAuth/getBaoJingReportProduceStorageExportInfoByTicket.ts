import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/导出相关/getBaoJingReportProduceStorageExportInfoByTicketUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IJSONResultExportInformationBaojingReportProductDailyReportResponseObject['data']>({
      url: "/masterdata-service/exportAuth/getBaoJingReportProduceStorageExportInfoByTicket",
      params,
    });
}
// JSONResult«导出信息«宝晶报表(成品日报表)响应对象»»
export interface IJSONResultExportInformationBaojingReportProductDailyReportResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationBaojingReportProductDailyReportResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«宝晶报表(成品日报表)响应对象»
export interface IExportInformationBaojingReportProductDailyReportResponseObject {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IBaojingReportFinishedDailyReportResponseObject[];
}
// 宝晶报表(成品日报表)响应对象
export interface IBaojingReportFinishedDailyReportResponseObject {
    // 物料id
    majorDataId: number;
    // 物料编号
    majorDataCode: string;
    // 物料名称
    majorDataName: string;
    // 物料规格
    majorDataSpec: string;
    // 外部编码
    materialOutsideCode: string;
    // 区域id
    areaId: number;
    // 区域名称
    areaName: string;
    // 期初-成品数
    beginProduceQuantity: number;
    // 期初-半成品数
    beginRawQuantity: number;
    // 期初-待处理数
    beginWaitQuantity: number;
    // 期初-报废数
    beginScrapQuantity: number;
    // 入库-成品数
    inProduceQuantity: number;
    // 入库-半成品数
    inRawQuantity: number;
    // 入库-待处理数
    inWaitQuantity: number;
    // 入库-报废数
    inScrapQuantity: number;
    // 出库-成品数
    outProduceQuantity: number;
    // 出库-半成品数
    outRawQuantity: number;
    // 出库-待处理数
    outWaitQuantity: number;
    // 出库-报废数
    outScrapQuantity: number;
    // 报废数
    scrapQuantity: number;
    // 期末-成品数
    endProduceQuantity: number;
    // 期末-半成品数
    endRawQuantity: number;
    // 期末-待处理数
    endWaitQuantity: number;
    // 数据来源
    source: string;
}

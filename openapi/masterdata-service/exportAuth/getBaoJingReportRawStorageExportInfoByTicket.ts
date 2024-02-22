// http://47.108.139.107:16700/doc.html#/default/导出相关/getBaoJingReportRawStorageExportInfoByTicketUsingGET
// JSONResult«导出信息«宝晶报表(原材料日报表)相关返回VO»»
export interface IJSONResultExportInformationBaojingReportDailyReportOfRawMaterialsReturnToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExportInformationBaojingReportRawMaterialsDailyReportRelatedReturnToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«宝晶报表(原材料日报表)相关返回VO»
export interface IExportInformationBaojingReportRawMaterialsDailyReportRelatedReturnToVO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IBaojingReportRawMaterialsDailyReportRelatedToReturnToVO[];
}
// 宝晶报表(原材料日报表)相关返回VO
export interface IBaojingReportRawMaterialsDailyReportRelatedToReturnToVO {
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
    // 期初数
    beginQuantity: number;
    // 入库数
    inQuantity: number;
    // 出库数
    outQuantity: number;
    // 期末数
    endQuantity: number;
    // 数据来源
    source: string;
}

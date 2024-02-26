import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/导出相关/getBaoJingReportProduceStorageExportInfoByTicketUsingGET
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IJSONResultExportInformationBaojingReportProductDailyReportResponseObject>(
        {
            url: "/masterdata-service/exportAuth/getBaoJingReportProduceStorageExportInfoByTicket",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«导出信息«宝晶报表(成品日报表)响应对象»» */
export interface IJSONResultExportInformationBaojingReportProductDailyReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportInformationBaojingReportProductDailyReportResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 导出信息«宝晶报表(成品日报表)响应对象» */
export interface IExportInformationBaojingReportProductDailyReportResponseObject {
    /** 导出类型 */
    exportType?: ('USER' | 'MAJOR_DATA' | 'BOM' | 'DEVICE' | 'DEVICE_COLLECTION_PARAM' | 'PROCESS' | 'WORK_PLACE' | 'MAJOR_DATA_UNIT' | 'PRODUCE_TAG' | 'PRODUCE_ABNORMAL_CATEGORY' | 'ROUTING' | 'PRODUCE_ROUTING' | 'PRODUCE_ROUTING_FAST' | 'SUPPLIER' | 'CUSTOMER' | 'ANDON_STATION_MACHINE' | 'PRODUCE_ENTRUST' | 'DEVICE_COLLECTION_STATISTIC' | 'DEVICE_COLLECTION_DETAIL' | 'WAREHOUSE' | 'USER_REPORT' | 'SALES_ORDER_REPORT' | 'PRODUCTION_REPORT_CLASS_GROUP' | 'PRODUCTION_REPORT_PROCESS' | 'PRODUCTION_REPORT_MAJOR_DATA' | 'PRODUCTION_REPORT_DATA' | 'PRODUCE_TIME_FEE_DETAIL' | 'PRODUCE_TIME_FEE_MONTH' | 'YIELD_RATE_REPORT_CLASS_GROUP' | 'SCRAP_REPORT_CLASS_GROUP' | 'SCRAP_REPORT_PROCESS' | 'SCRAP_REPORT_MAJOR_DATA' | 'SCRAP_REPORT_TYPE' | 'SCRAP_REPORT_DATA' | 'PRODUCE_FEE_REPORT' | 'PRODUCE_ENTRUST_REPORT' | 'FPY_RATE_REPORT_DATA' | 'FPY_RATE_REPORT' | 'WIP_REPORT' | 'WIP_EXCEPTION_REPORT' | 'ANDON_CALL_ANALYZE_REPORT' | 'ANDON_DEVICE_FAULT_REPORT' | 'ANDON_BAD_INCOMING_REPORT' | 'ANDON_ABNORMAL_QUALITY_REPORT' | 'XINDE_COATING_LINE_DAILY_REPORT' | 'XINDE_DZJ_STATISTIC_REPORT' | 'XINDE_FBJ_STATISTIC_REPORT' | 'XINDE_GZX_STATISTIC_REPORT' | 'BAO_JING_SALES_DELIVER_REPORT' | 'BAO_JING_CONSIGNMENT_INBOUND_ANALYZE_REPORT' | 'BAO_JING_CONSIGNMENT_LOSS_ANALYZE_REPORT' | 'BAO_JING_ACCOUNTS_RECEIVABLE_REPORT' | 'BAO_JING_COLLECTION_TOTAL_REPORT' | 'BAO_JING_PURCHASE_ARRIVED_STATISTIC_REPORT' | 'BAO_JING_AFTER_SALES_QUALITY_REPORT' | 'BAO_JING_PRODUCE_STORAGE_REPORT' | 'BAO_JING_RAW_STORAGE_REPORT' | 'BAO_JING_SCRAP_REPORT' | 'QUALITY_GOOD_SCRAP_REPORT' | 'STORAGE_TAKE_CHECK_TASK_DETAIL' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_LOT' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_SERIAL_NO' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_LOT_SERIAL_NO' | 'PROJECT_TASK_EXPORT' | 'PROJECT_TASK_IMPORT' | 'QMS_QUALITY_MONTH_REPORT_EXPORT' | 'QMS_QUALITY_MONTH_REPORT_DEPARTMENT_EXPORT');
    /** 数据 */
    itemList?: IBaojingReportFinishedDailyReportResponseObject[];
}
/** 宝晶报表(成品日报表)响应对象 */
export interface IBaojingReportFinishedDailyReportResponseObject {
    /** 物料id */
    majorDataId?: number;
    /** 物料编号 */
    majorDataCode?: string;
    /** 物料名称 */
    majorDataName?: string;
    /** 物料规格 */
    majorDataSpec?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 区域id */
    areaId?: number;
    /** 区域名称 */
    areaName?: string;
    /** 期初-成品数 */
    beginProduceQuantity?: number;
    /** 期初-半成品数 */
    beginRawQuantity?: number;
    /** 期初-待处理数 */
    beginWaitQuantity?: number;
    /** 期初-报废数 */
    beginScrapQuantity?: number;
    /** 入库-成品数 */
    inProduceQuantity?: number;
    /** 入库-半成品数 */
    inRawQuantity?: number;
    /** 入库-待处理数 */
    inWaitQuantity?: number;
    /** 入库-报废数 */
    inScrapQuantity?: number;
    /** 出库-成品数 */
    outProduceQuantity?: number;
    /** 出库-半成品数 */
    outRawQuantity?: number;
    /** 出库-待处理数 */
    outWaitQuantity?: number;
    /** 出库-报废数 */
    outScrapQuantity?: number;
    /** 报废数 */
    scrapQuantity?: number;
    /** 期末-成品数 */
    endProduceQuantity?: number;
    /** 期末-半成品数 */
    endRawQuantity?: number;
    /** 期末-待处理数 */
    endWaitQuantity?: number;
    /** 数据来源 */
    source?: string;
}

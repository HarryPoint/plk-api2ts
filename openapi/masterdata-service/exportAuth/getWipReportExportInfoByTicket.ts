import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/导出相关/getWipReportExportInfoByTicketUsingGET
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IJSONResultExportInformationWIPStatisticsReportReturnsVO>(
        {
            url: "/masterdata-service/exportAuth/getWipReportExportInfoByTicket",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«导出信息«WIP统计报表返回VO»» */
export interface IJSONResultExportInformationWIPStatisticsReportReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportInformationWIPStatisticsReportReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 导出信息«WIP统计报表返回VO» */
export interface IExportInformationWIPStatisticsReportReturnsVO {
    /** 导出类型 */
    exportType?: ('USER' | 'MAJOR_DATA' | 'BOM' | 'DEVICE' | 'DEVICE_COLLECTION_PARAM' | 'PROCESS' | 'WORK_PLACE' | 'MAJOR_DATA_UNIT' | 'PRODUCE_TAG' | 'PRODUCE_ABNORMAL_CATEGORY' | 'ROUTING' | 'PRODUCE_ROUTING' | 'PRODUCE_ROUTING_FAST' | 'SUPPLIER' | 'CUSTOMER' | 'ANDON_STATION_MACHINE' | 'PRODUCE_ENTRUST' | 'DEVICE_COLLECTION_STATISTIC' | 'DEVICE_COLLECTION_DETAIL' | 'WAREHOUSE' | 'USER_REPORT' | 'SALES_ORDER_REPORT' | 'PRODUCTION_REPORT_CLASS_GROUP' | 'PRODUCTION_REPORT_PROCESS' | 'PRODUCTION_REPORT_MAJOR_DATA' | 'PRODUCTION_REPORT_DATA' | 'PRODUCE_TIME_FEE_DETAIL' | 'PRODUCE_TIME_FEE_MONTH' | 'YIELD_RATE_REPORT_CLASS_GROUP' | 'SCRAP_REPORT_CLASS_GROUP' | 'SCRAP_REPORT_PROCESS' | 'SCRAP_REPORT_MAJOR_DATA' | 'SCRAP_REPORT_TYPE' | 'SCRAP_REPORT_DATA' | 'PRODUCE_FEE_REPORT' | 'PRODUCE_ENTRUST_REPORT' | 'FPY_RATE_REPORT_DATA' | 'FPY_RATE_REPORT' | 'WIP_REPORT' | 'WIP_EXCEPTION_REPORT' | 'ANDON_CALL_ANALYZE_REPORT' | 'ANDON_DEVICE_FAULT_REPORT' | 'ANDON_BAD_INCOMING_REPORT' | 'ANDON_ABNORMAL_QUALITY_REPORT' | 'XINDE_COATING_LINE_DAILY_REPORT' | 'XINDE_DZJ_STATISTIC_REPORT' | 'XINDE_FBJ_STATISTIC_REPORT' | 'XINDE_GZX_STATISTIC_REPORT' | 'BAO_JING_SALES_DELIVER_REPORT' | 'BAO_JING_CONSIGNMENT_INBOUND_ANALYZE_REPORT' | 'BAO_JING_CONSIGNMENT_LOSS_ANALYZE_REPORT' | 'BAO_JING_ACCOUNTS_RECEIVABLE_REPORT' | 'BAO_JING_COLLECTION_TOTAL_REPORT' | 'BAO_JING_PURCHASE_ARRIVED_STATISTIC_REPORT' | 'BAO_JING_AFTER_SALES_QUALITY_REPORT' | 'BAO_JING_PRODUCE_STORAGE_REPORT' | 'BAO_JING_RAW_STORAGE_REPORT' | 'BAO_JING_SCRAP_REPORT' | 'QUALITY_GOOD_SCRAP_REPORT' | 'STORAGE_TAKE_CHECK_TASK_DETAIL' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_LOT' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_SERIAL_NO' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_LOT_SERIAL_NO' | 'PROJECT_TASK_EXPORT' | 'PROJECT_TASK_IMPORT' | 'QMS_QUALITY_MONTH_REPORT_EXPORT' | 'QMS_QUALITY_MONTH_REPORT_DEPARTMENT_EXPORT');
    /** 数据 */
    itemList?: ITheWIPStatisticsReportReturnsVO[];
}
/** WIP统计报表返回VO */
export interface ITheWIPStatisticsReportReturnsVO {
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 所有工序库存信息 */
    allProcessWarehouse?: IWIPInventoryStatisticsReportReturnsVO;
    /** 工序信息集 */
    processList?: IWIPProcessStatisticsReportReturnsVO[];
}
/** WIP库存统计报表返回VO */
export interface IWIPInventoryStatisticsReportReturnsVO {
    /** 总数 */
    totalQuantity?: number;
    /** 正常总数 */
    normalTotalQuantity?: number;
    /** 异常总数 */
    exceptionTotalQuantity?: number;
    /** 在制前总数 */
    beforeTotalQuantity?: number;
    /** 在制前正常数 */
    beforeNormalQuantity?: number;
    /** 在制前异常数 */
    beforeExceptionQuantity?: number;
    /** 在制中总数 */
    inTotalQuantity?: number;
    /** 在制中正常数 */
    inNormalQuantity?: number;
    /** 在制中异常数 */
    inExceptionQuantity?: number;
}
/** WIP工序统计报表返回VO */
export interface IWIPProcessStatisticsReportReturnsVO {
    /** 工序id */
    processId?: number;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序库存集 */
    warehouse?: IWIPInventoryStatisticsReportReturnsVO;
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/导出相关/getSalesOrderReportExportInfoByTicketUsingGET
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IJSONResultExportOrderProgressStatisticsExportVO>(
        {
            url: "/masterdata-service/exportAuth/getSalesOrderReportExportInfoByTicket",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«导出信息«订单进度统计导出VO»» */
export interface IJSONResultExportOrderProgressStatisticsExportVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportInformationOrderProgressStatisticsExportVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 导出信息«订单进度统计导出VO» */
export interface IExportInformationOrderProgressStatisticsExportVO {
    /** 导出类型 */
    exportType?: ('USER' | 'MAJOR_DATA' | 'BOM' | 'DEVICE' | 'DEVICE_COLLECTION_PARAM' | 'PROCESS' | 'WORK_PLACE' | 'MAJOR_DATA_UNIT' | 'PRODUCE_TAG' | 'PRODUCE_ABNORMAL_CATEGORY' | 'ROUTING' | 'PRODUCE_ROUTING' | 'PRODUCE_ROUTING_FAST' | 'SUPPLIER' | 'CUSTOMER' | 'ANDON_STATION_MACHINE' | 'PRODUCE_ENTRUST' | 'DEVICE_COLLECTION_STATISTIC' | 'DEVICE_COLLECTION_DETAIL' | 'WAREHOUSE' | 'USER_REPORT' | 'SALES_ORDER_REPORT' | 'PRODUCTION_REPORT_CLASS_GROUP' | 'PRODUCTION_REPORT_PROCESS' | 'PRODUCTION_REPORT_MAJOR_DATA' | 'PRODUCTION_REPORT_DATA' | 'PRODUCE_TIME_FEE_DETAIL' | 'PRODUCE_TIME_FEE_MONTH' | 'YIELD_RATE_REPORT_CLASS_GROUP' | 'SCRAP_REPORT_CLASS_GROUP' | 'SCRAP_REPORT_PROCESS' | 'SCRAP_REPORT_MAJOR_DATA' | 'SCRAP_REPORT_TYPE' | 'SCRAP_REPORT_DATA' | 'PRODUCE_FEE_REPORT' | 'PRODUCE_ENTRUST_REPORT' | 'FPY_RATE_REPORT_DATA' | 'FPY_RATE_REPORT' | 'WIP_REPORT' | 'WIP_EXCEPTION_REPORT' | 'ANDON_CALL_ANALYZE_REPORT' | 'ANDON_DEVICE_FAULT_REPORT' | 'ANDON_BAD_INCOMING_REPORT' | 'ANDON_ABNORMAL_QUALITY_REPORT' | 'XINDE_COATING_LINE_DAILY_REPORT' | 'XINDE_DZJ_STATISTIC_REPORT' | 'XINDE_FBJ_STATISTIC_REPORT' | 'XINDE_GZX_STATISTIC_REPORT' | 'BAO_JING_SALES_DELIVER_REPORT' | 'BAO_JING_CONSIGNMENT_INBOUND_ANALYZE_REPORT' | 'BAO_JING_CONSIGNMENT_LOSS_ANALYZE_REPORT' | 'BAO_JING_ACCOUNTS_RECEIVABLE_REPORT' | 'BAO_JING_COLLECTION_TOTAL_REPORT' | 'BAO_JING_PURCHASE_ARRIVED_STATISTIC_REPORT' | 'BAO_JING_AFTER_SALES_QUALITY_REPORT' | 'BAO_JING_PRODUCE_STORAGE_REPORT' | 'BAO_JING_RAW_STORAGE_REPORT' | 'BAO_JING_SCRAP_REPORT' | 'QUALITY_GOOD_SCRAP_REPORT' | 'STORAGE_TAKE_CHECK_TASK_DETAIL' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_LOT' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_SERIAL_NO' | 'STORAGE_TAKE_CHECK_TASK_DETAIL_LOT_SERIAL_NO' | 'PROJECT_TASK_EXPORT' | 'PROJECT_TASK_IMPORT' | 'QMS_QUALITY_MONTH_REPORT_EXPORT' | 'QMS_QUALITY_MONTH_REPORT_DEPARTMENT_EXPORT');
    /** 数据 */
    itemList?: IOrderProgressStatisticsAreDerivedVO2[];
}
/** 订单进度统计导出VO_2 */
export interface IOrderProgressStatisticsAreDerivedVO2 {
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 销售订单状态 */
    salesOrderStatus?: ('CREATED' | 'CONVERTING' | 'CONVERED' | 'CANCEL' | 'CLOSE');
    /** 销售订单状态字符串 */
    salesOrderStatusDesc?: string;
    /** 销售订单明细 */
    salesOrderDetails?: IOrderProgressStatisticsAreExportedVO1[];
    /** 销售订单中生产订单数量 */
    produceOrderCount?: number;
    /** 销售订单创建时间 */
    salesOrderCreateTime?: string;
}
/** 订单进度统计导出VO_1 */
export interface IOrderProgressStatisticsAreExportedVO1 {
    /** 物料id */
    materialId?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格型号 */
    spec?: string;
    /** 交付数量 */
    totalQuantity?: number;
    /** 交付日期 */
    deliveryDate?: string;
    /** 交付日期字符串 */
    deliveryDateStr?: string;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    minPlanBeginTime?: string;
    /** 计划开始时间字符串 */
    minPlanBeginTimeStr?: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    maxPlanEndTime?: string;
    /** 计划结束时间字符串 */
    maxPlanEndTimeStr?: string;
    /** 实际生产开始时间 */
    minActualBeginTime?: string;
    /** 实际生产开始时间字符串 */
    minActualBeginTimeStr?: string;
    /** 实际生产完成时间 */
    maxActualEndTime?: string;
    /** 实际生产完成时间字符串 */
    maxActualEndTimeStr?: string;
    /** 交付剩余天数 */
    deliveryRemainingDays?: number;
    /** 已转换数量 */
    totalConvertQuantity?: number;
    /** 转生产进度 */
    convertRatio?: string;
    /** 订单完成进度 */
    completeRatio?: string;
    /** 排产进度 */
    planRatio?: string;
    /** 总合格产出数量 */
    totalProduceQuantity?: number;
    /** 已排产数量 */
    totalPlanQuantity?: number;
    /** 生产订单 */
    produceOrders?: IOrderProgressStatisticsAreExportedToVO[];
}
/** 订单进度统计导出VO */
export interface IOrderProgressStatisticsAreExportedToVO {
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 生产物料id */
    produceMaterialId?: number;
    /** 生产物料编码 */
    produceMaterialCode?: string;
    /** 生产物料名称 */
    produceMaterialName?: string;
    /** 生产物料规格型号 */
    produceMaterialSpec?: string;
    /** 生产数量 */
    convertQuantity?: number;
    /** 生产订单状态 */
    produceOrderStatus?: ('CREATED' | 'PLAN' | 'ISSUE' | 'PRODUCE' | 'CANCEL' | 'CLOSE' | 'PART_COMPLETE' | 'COMPLETE');
    /** 生产订单状态描述 */
    produceOrderStatusStr?: string;
    /** 排产状态 */
    produceOrderPlanStatus?: ('WAIT' | 'PART' | 'ALL');
    /** 排产状态描述 */
    produceOrderPlanStatusStr?: string;
    /** 计划生产开始时间 */
    planBeginTime?: string;
    /** 计划生产结束时间 */
    planEndTime?: string;
    /** 计划生产开始时间字符串 */
    planBeginTimeStr?: string;
    /** 计划生产结束时间字符串 */
    planEndTimeStr?: string;
    /** 计划生产数量 */
    planQuantity?: number;
    /** 实际生产开始时间 */
    actualBeginTime?: string;
    /** 实际生产结束时间 */
    actualEndTime?: string;
    /** 实际生产开始时间字符串 */
    actualBeginTimeStr?: string;
    /** 实际生产结束时间字符串 */
    actualEndTimeStr?: string;
    /** 合格产出数量 */
    produceQuantity?: number;
    /** 报废数量 */
    scrapQuantity?: number;
    /** 委外数量 */
    entrustQuantity?: number;
    /** 合格产出进度 */
    produceRatio?: string;
}

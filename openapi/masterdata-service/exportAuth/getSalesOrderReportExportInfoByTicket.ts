import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/导出相关/getSalesOrderReportExportInfoByTicketUsingGET
*/
export default function fetchMethod(options: { params: { Ticket?: string } }, extraOptions?: any) {
    return http<IJSONResultExportOrderProgressStatisticsExportVO>(
        {
            url: "/masterdata-service/exportAuth/getSalesOrderReportExportInfoByTicket",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«导出信息«订单进度统计导出VO»» */
export interface IJSONResultExportOrderProgressStatisticsExportVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IExportInformationOrderProgressStatisticsExportVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 导出信息«订单进度统计导出VO» */
export interface IExportInformationOrderProgressStatisticsExportVO {
    /** 导出类型 */
    exportType?: EExportInformationOrderProgressStatisticsExportVO_exportType;
    /** 数据 */
    itemList?: IOrderProgressStatisticsAreDerivedVO2[];
}
/** 订单进度统计导出VO_2 */
export interface IOrderProgressStatisticsAreDerivedVO2 {
    /** 客户名称 */
    customerName?: string;
    /** 销售订单中生产订单数量 */
    produceOrderCount?: number;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 销售订单创建时间 */
    salesOrderCreateTime?: number;
    /** 销售订单明细 */
    salesOrderDetails?: IOrderProgressStatisticsAreExportedVO1[];
    /** 销售订单状态 */
    salesOrderStatus?: EOrderProgressStatisticsAreDerivedVO2_salesOrderStatus;
    /** 销售订单状态字符串 */
    salesOrderStatusDesc?: string;
}
/** 订单进度统计导出VO_1 */
export interface IOrderProgressStatisticsAreExportedVO1 {
    /** 订单完成进度 */
    completeRatio?: string;
    /** 转生产进度 */
    convertRatio?: string;
    /** 交付日期 */
    deliveryDate?: number;
    /** 交付日期字符串 */
    deliveryDateStr?: string;
    /** 交付剩余天数 */
    deliveryRemainingDays?: number;
    /** 物料编码 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 实际生产完成时间 */
    maxActualEndTime?: number;
    /** 实际生产完成时间字符串 */
    maxActualEndTimeStr?: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    maxPlanEndTime?: number;
    /** 计划结束时间字符串 */
    maxPlanEndTimeStr?: string;
    /** 实际生产开始时间 */
    minActualBeginTime?: number;
    /** 实际生产开始时间字符串 */
    minActualBeginTimeStr?: string;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    minPlanBeginTime?: number;
    /** 计划开始时间字符串 */
    minPlanBeginTimeStr?: string;
    /** 排产进度 */
    planRatio?: string;
    /** 生产订单 */
    produceOrders?: IOrderProgressStatisticsAreExportedToVO[];
    /** 物料规格型号 */
    spec?: string;
    /** 已转换数量 */
    totalConvertQuantity?: number;
    /** 已排产数量 */
    totalPlanQuantity?: number;
    /** 总合格产出数量 */
    totalProduceQuantity?: number;
    /** 交付数量 */
    totalQuantity?: number;
}
/** 订单进度统计导出VO */
export interface IOrderProgressStatisticsAreExportedToVO {
    /** 实际生产开始时间 */
    actualBeginTime?: number;
    /** 实际生产开始时间字符串 */
    actualBeginTimeStr?: string;
    /** 实际生产结束时间 */
    actualEndTime?: number;
    /** 实际生产结束时间字符串 */
    actualEndTimeStr?: string;
    /** 生产数量 */
    convertQuantity?: number;
    /** 委外数量 */
    entrustQuantity?: number;
    /** 计划生产开始时间 */
    planBeginTime?: number;
    /** 计划生产开始时间字符串 */
    planBeginTimeStr?: string;
    /** 计划生产结束时间 */
    planEndTime?: number;
    /** 计划生产结束时间字符串 */
    planEndTimeStr?: string;
    /** 计划生产数量 */
    planQuantity?: number;
    /** 生产物料编码 */
    produceMaterialCode?: string;
    /** 生产物料id */
    produceMaterialId?: string;
    /** 生产物料名称 */
    produceMaterialName?: string;
    /** 生产物料规格型号 */
    produceMaterialSpec?: string;
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 排产状态 */
    produceOrderPlanStatus?: EOrderProgressStatisticsAreExportedToVO_produceOrderPlanStatus;
    /** 排产状态描述 */
    produceOrderPlanStatusStr?: string;
    /** 生产订单状态 */
    produceOrderStatus?: EOrderProgressStatisticsAreExportedToVO_produceOrderStatus;
    /** 生产订单状态描述 */
    produceOrderStatusStr?: string;
    /** 合格产出数量 */
    produceQuantity?: number;
    /** 合格产出进度 */
    produceRatio?: string;
    /** 报废数量 */
    scrapQuantity?: number;
}

export enum EExportInformationOrderProgressStatisticsExportVO_exportType {
    /** 员工数据 */
    USER = "USER",
    /** 物料数据 */
    MAJOR_DATA = "MAJOR_DATA",
    /** BOM数据 */
    BOM = "BOM",
    /** 设备数据 */
    DEVICE = "DEVICE",
    /** 设备采集参数 */
    DEVICE_COLLECTION_PARAM = "DEVICE_COLLECTION_PARAM",
    /** 工序数据 */
    PROCESS = "PROCESS",
    /** 工位数据 */
    WORK_PLACE = "WORK_PLACE",
    /** 单位数据 */
    MAJOR_DATA_UNIT = "MAJOR_DATA_UNIT",
    /** 标签数据 */
    PRODUCE_TAG = "PRODUCE_TAG",
    /** 生产异常类型数据 */
    PRODUCE_ABNORMAL_CATEGORY = "PRODUCE_ABNORMAL_CATEGORY",
    /** 工艺路径 */
    ROUTING = "ROUTING",
    /** 工艺路径 */
    PRODUCE_ROUTING = "PRODUCE_ROUTING",
    /** 工艺路径 */
    PRODUCE_ROUTING_FAST = "PRODUCE_ROUTING_FAST",
    /** 供应商数据 */
    SUPPLIER = "SUPPLIER",
    /** 客户数据 */
    CUSTOMER = "CUSTOMER",
    /** 安灯终端数据 */
    ANDON_STATION_MACHINE = "ANDON_STATION_MACHINE",
    /** 委外订单 */
    PRODUCE_ENTRUST = "PRODUCE_ENTRUST",
    /** 设备数采统计 */
    DEVICE_COLLECTION_STATISTIC = "DEVICE_COLLECTION_STATISTIC",
    /** 设备数采详单 */
    DEVICE_COLLECTION_DETAIL = "DEVICE_COLLECTION_DETAIL",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE",
    /** 员工统计报表 */
    USER_REPORT = "USER_REPORT",
    /** 订单进度报表 */
    SALES_ORDER_REPORT = "SALES_ORDER_REPORT",
    /** 产出统计报表(按班组统计) */
    PRODUCTION_REPORT_CLASS_GROUP = "PRODUCTION_REPORT_CLASS_GROUP",
    /** 产出统计报表(按工序统计) */
    PRODUCTION_REPORT_PROCESS = "PRODUCTION_REPORT_PROCESS",
    /** 产出统计报表(按物料统计) */
    PRODUCTION_REPORT_MAJOR_DATA = "PRODUCTION_REPORT_MAJOR_DATA",
    /** 产出统计报表(产出数据统计) */
    PRODUCTION_REPORT_DATA = "PRODUCTION_REPORT_DATA",
    /** 工时工费统计(明细) */
    PRODUCE_TIME_FEE_DETAIL = "PRODUCE_TIME_FEE_DETAIL",
    /** 工时工费统计(月度汇总) */
    PRODUCE_TIME_FEE_MONTH = "PRODUCE_TIME_FEE_MONTH",
    /** 良品率数据表 */
    YIELD_RATE_REPORT_CLASS_GROUP = "YIELD_RATE_REPORT_CLASS_GROUP",
    /** 良品与报废报表(按班组统计) */
    SCRAP_REPORT_CLASS_GROUP = "SCRAP_REPORT_CLASS_GROUP",
    /** 良品与报废报表(按工序统计) */
    SCRAP_REPORT_PROCESS = "SCRAP_REPORT_PROCESS",
    /** 良品与报废报表(按物料统计) */
    SCRAP_REPORT_MAJOR_DATA = "SCRAP_REPORT_MAJOR_DATA",
    /** 良品与报废报表(按报废类型统计) */
    SCRAP_REPORT_TYPE = "SCRAP_REPORT_TYPE",
    /** 良品与报废报表(报废数据统计) */
    SCRAP_REPORT_DATA = "SCRAP_REPORT_DATA",
    /** 工费报表 */
    PRODUCE_FEE_REPORT = "PRODUCE_FEE_REPORT",
    /** 委外统计报表 */
    PRODUCE_ENTRUST_REPORT = "PRODUCE_ENTRUST_REPORT",
    /** 直通率数据表 */
    FPY_RATE_REPORT_DATA = "FPY_RATE_REPORT_DATA",
    /** 直通率统计报表 */
    FPY_RATE_REPORT = "FPY_RATE_REPORT",
    /** 实时WIP表 */
    WIP_REPORT = "WIP_REPORT",
    /** 异常WIP表 */
    WIP_EXCEPTION_REPORT = "WIP_EXCEPTION_REPORT",
    /** 安灯呼叫分析表 */
    ANDON_CALL_ANALYZE_REPORT = "ANDON_CALL_ANALYZE_REPORT",
    /** 安灯设备故障表 */
    ANDON_DEVICE_FAULT_REPORT = "ANDON_DEVICE_FAULT_REPORT",
    /** 安灯来料不良表 */
    ANDON_BAD_INCOMING_REPORT = "ANDON_BAD_INCOMING_REPORT",
    /** 安灯品质异常表 */
    ANDON_ABNORMAL_QUALITY_REPORT = "ANDON_ABNORMAL_QUALITY_REPORT",
    /** 智能涂装线能耗统计表 */
    XINDE_COATING_LINE_DAILY_REPORT = "XINDE_COATING_LINE_DAILY_REPORT",
    /** 电子锯报表 */
    XINDE_DZJ_STATISTIC_REPORT = "XINDE_DZJ_STATISTIC_REPORT",
    /** 封边机报表 */
    XINDE_FBJ_STATISTIC_REPORT = "XINDE_FBJ_STATISTIC_REPORT",
    /** 辊轧线报表 */
    XINDE_GZX_STATISTIC_REPORT = "XINDE_GZX_STATISTIC_REPORT",
    /** 销售发货分析表 */
    BAO_JING_SALES_DELIVER_REPORT = "BAO_JING_SALES_DELIVER_REPORT",
    /** 销售结算分析表 */
    BAO_JING_CONSIGNMENT_INBOUND_ANALYZE_REPORT = "BAO_JING_CONSIGNMENT_INBOUND_ANALYZE_REPORT",
    /** 寄售损耗分析表 */
    BAO_JING_CONSIGNMENT_LOSS_ANALYZE_REPORT = "BAO_JING_CONSIGNMENT_LOSS_ANALYZE_REPORT",
    /** 应收账款分析表 */
    BAO_JING_ACCOUNTS_RECEIVABLE_REPORT = "BAO_JING_ACCOUNTS_RECEIVABLE_REPORT",
    /** 收款汇总分析表 */
    BAO_JING_COLLECTION_TOTAL_REPORT = "BAO_JING_COLLECTION_TOTAL_REPORT",
    /** 采购到货统计表 */
    BAO_JING_PURCHASE_ARRIVED_STATISTIC_REPORT = "BAO_JING_PURCHASE_ARRIVED_STATISTIC_REPORT",
    /** 售后质量分析表 */
    BAO_JING_AFTER_SALES_QUALITY_REPORT = "BAO_JING_AFTER_SALES_QUALITY_REPORT",
    /** 库存日报表 */
    BAO_JING_PRODUCE_STORAGE_REPORT = "BAO_JING_PRODUCE_STORAGE_REPORT",
    /** 原材料库存日报表 */
    BAO_JING_RAW_STORAGE_REPORT = "BAO_JING_RAW_STORAGE_REPORT",
    /** 仓库报废统计表 */
    BAO_JING_SCRAP_REPORT = "BAO_JING_SCRAP_REPORT",
    /** 良品报废数据表 */
    QUALITY_GOOD_SCRAP_REPORT = "QUALITY_GOOD_SCRAP_REPORT",
    /** 盘点任务明细表 */
    STORAGE_TAKE_CHECK_TASK_DETAIL = "STORAGE_TAKE_CHECK_TASK_DETAIL",
    /** 盘点任务明细表 */
    STORAGE_TAKE_CHECK_TASK_DETAIL_LOT = "STORAGE_TAKE_CHECK_TASK_DETAIL_LOT",
    /** 盘点任务明细表 */
    STORAGE_TAKE_CHECK_TASK_DETAIL_SERIAL_NO = "STORAGE_TAKE_CHECK_TASK_DETAIL_SERIAL_NO",
    /** 盘点任务明细表 */
    STORAGE_TAKE_CHECK_TASK_DETAIL_LOT_SERIAL_NO = "STORAGE_TAKE_CHECK_TASK_DETAIL_LOT_SERIAL_NO",
    /** 项目任务列表 */
    PROJECT_TASK_EXPORT = "PROJECT_TASK_EXPORT",
    /** 项目计划导入模板 */
    PROJECT_TASK_IMPORT = "PROJECT_TASK_IMPORT",
    /** 质量月报报表 */
    QMS_QUALITY_MONTH_REPORT_EXPORT = "QMS_QUALITY_MONTH_REPORT_EXPORT",
    /** 质量月报报表 */
    QMS_QUALITY_MONTH_REPORT_DEPARTMENT_EXPORT = "QMS_QUALITY_MONTH_REPORT_DEPARTMENT_EXPORT"
}

export enum EOrderProgressStatisticsAreDerivedVO2_salesOrderStatus {
    /** 未转生产订单 */
    CREATED = "CREATED",
    /** 部分已转 */
    CONVERTING = "CONVERTING",
    /** 已转生产订单 */
    CONVERED = "CONVERED",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EOrderProgressStatisticsAreExportedToVO_produceOrderPlanStatus {
    /** 待排产 */
    WAIT = "WAIT",
    /** 部分排产 */
    PART = "PART",
    /** 全部排产 */
    ALL = "ALL"
}

export enum EOrderProgressStatisticsAreExportedToVO_produceOrderStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 已排产 */
    PLAN = "PLAN",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 部分完成 */
    PART_COMPLETE = "PART_COMPLETE",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}

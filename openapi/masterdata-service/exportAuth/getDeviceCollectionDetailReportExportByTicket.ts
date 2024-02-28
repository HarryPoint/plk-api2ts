import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/导出相关/getDeviceCollectionDetailReportExportByTicketUsingGET
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IJSONResultExportInformationDeviceDataCollectionDetailsExportVO>(
        {
            url: "/masterdata-service/exportAuth/getDeviceCollectionDetailReportExportByTicket",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«导出信息«设备数采明细报表导出VO»» */
export interface IJSONResultExportInformationDeviceDataCollectionDetailsExportVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExportInformationExportDetailedDeviceDataCollectionReportVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 导出信息«设备数采明细报表导出VO» */
export interface IExportInformationExportDetailedDeviceDataCollectionReportVO {
    /** 导出类型 */
    exportType?: EExportInformationExportDetailedDeviceDataCollectionReportVO_exportType;
    /** 数据 */
    itemList?: IExportDetailedDeviceDataCollectionReportVO[];
}
/** 设备数采明细报表导出VO */
export interface IExportDetailedDeviceDataCollectionReportVO {
    /** 设备名称 */
    deviceName?: string;
    /** 设备编号 */
    deviceCode?: string;
    /** 数据提交时间 */
    collectTime?: string;
    /** 请求员工姓名 */
    reqUsername?: string;
    /** 数据状态 */
    dataStatus?: string;
    /** 设备数采参数名称 */
    paramName?: string;
    /** 设备数采参数编号 */
    paramCode?: string;
    /** 设备数采参数单位 */
    paramUnit?: string;
    /** 结果 */
    result?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 异常类型 */
    errorType?: EExportDetailedDeviceDataCollectionReportVO_errorType;
    /** 异常值 */
    errorResult?: number;
}

export enum EExportInformationExportDetailedDeviceDataCollectionReportVO_exportType {
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

export enum EExportDetailedDeviceDataCollectionReportVO_errorType {
    /** 超上限 */
    UPPER = "UPPER",
    /** 超下限 */
    LOWER = "LOWER"
}

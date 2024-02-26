import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/报表模板/selectorUsingPOST
*/
export default function fetchMethod(options: { params: { templateName?: string } }, extraOptions?: any) {
    return http<IJSONResultListReportTemplateQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/reportTemplate/selector",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ReportTemplateQueryResponseDTO»» */
export interface IJSONResultListReportTemplateQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IReportTemplateQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** ReportTemplateQueryResponseDTO */
export interface IReportTemplateQueryResponseDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** ID */
    id?: number;
    /** 模板名称 - 模糊查询 */
    templateName?: string;
    /** 报表类型 - 报表 */
    report?: EReportTemplateQueryResponseDTO_report;
    /** 报表名称 - 模糊查询 */
    reportName?: string;
    /** 模板状态 - 精确匹配 */
    dataStatus?: number;
    /** 报表统计时间区间描述 */
    reportStatisticsTimeRangeDesc?: string;
}

export enum EReportTemplateQueryResponseDTO_report {
    /** 生产日报 */
    PRODUCE_DAY_REPORT = "PRODUCE_DAY_REPORT",
    /** 良品报废数据表 */
    QUALITY_GOOD_SCRAP_REPORT = "QUALITY_GOOD_SCRAP_REPORT",
    /** 销售发货分析表 */
    SALES_DELIVER_REPORT = "SALES_DELIVER_REPORT",
    /** 寄售损耗分析表 */
    CONSIGNMENT_LOSS_ANALYZE_REPORT = "CONSIGNMENT_LOSS_ANALYZE_REPORT",
    /** 销售结算分析表 */
    CONSIGNMENT_INBOUND_ANALYZE_REPORT = "CONSIGNMENT_INBOUND_ANALYZE_REPORT",
    /** 应收账款分析表 */
    ACCOUNTS_RECEIVABLE_REPORT = "ACCOUNTS_RECEIVABLE_REPORT",
    /** 收款汇总表 */
    COLLECTION_TOTAL_REPORT = "COLLECTION_TOTAL_REPORT",
    /** 售后质量分析表 */
    AFTER_SALES_QUALITY_REPORT = "AFTER_SALES_QUALITY_REPORT",
    /** 订单进度报表 */
    SALES_ORDER_REPORT = "SALES_ORDER_REPORT",
    /** 采购到货统计表 */
    PURCHASE_ARRIVED_STATISTIC_REPORT = "PURCHASE_ARRIVED_STATISTIC_REPORT",
    /** 库存统计（成品）日报表 */
    PRODUCE_STORAGE_REPORT = "PRODUCE_STORAGE_REPORT",
    /** 库存统计（材料）日报表 */
    RAW_STORAGE_REPORT = "RAW_STORAGE_REPORT",
    /** 仓库报废统计表 */
    SCRAP_STORAGE_REPORT = "SCRAP_STORAGE_REPORT",
    /** 订单生产进度报表 */
    PRODUCE_PROGRESS_STATISTICS_REPORT = "PRODUCE_PROGRESS_STATISTICS_REPORT",
    /** 产能利用率报表 */
    PRODUCE_CAPACITY_REPORT = "PRODUCE_CAPACITY_REPORT",
    /** 产出数据报表 */
    PRODUCE_DATA_REPORT = "PRODUCE_DATA_REPORT",
    /** 按班组统计报表 */
    PRODUCE_CLASS_GROUP_REPORT = "PRODUCE_CLASS_GROUP_REPORT",
    /** 按工序统计报表 */
    PRODUCE_PROCESS_REPORT = "PRODUCE_PROCESS_REPORT",
    /** 按物料统计报表 */
    PRODUCE_MATERIAL_REPORT = "PRODUCE_MATERIAL_REPORT",
    /** 工费统计表 */
    PRODUCE_TIME_FEE_DETAIL_REPORT = "PRODUCE_TIME_FEE_DETAIL_REPORT",
    /** 工费统计表 */
    PRODUCE_TIME_FEE_MONTH_REPORT = "PRODUCE_TIME_FEE_MONTH_REPORT",
    /** 委外统计报表 */
    PRODUCE_ENTRUST_MAJOR_DATA_REPORT = "PRODUCE_ENTRUST_MAJOR_DATA_REPORT",
    /** 排产订单报表 */
    PRODUCE_ORDER_SCHEDULE_REPORT = "PRODUCE_ORDER_SCHEDULE_REPORT"
}

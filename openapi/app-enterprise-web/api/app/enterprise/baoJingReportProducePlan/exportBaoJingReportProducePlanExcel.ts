import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16400/doc.html#/default/宝晶生产计划报表/exportBaoJingReportProducePlanExcelUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingProductionTaskGanttChartQueryObject }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportProducePlan/exportBaoJingReportProducePlanExcel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶生产任务甘特图查询对象 */
export interface IBaojingProductionTaskGanttChartQueryObject {
    /** 物料id */
    materialIds?: string[];
    /** 部门id */
    departmentIds?: string[];
    /** 计划开始日期 */
    planStartDate?: number;
    /** 计划结束日期 */
    planEndDate?: number;
    /** 交货开始日期 */
    startDeliveryDate?: number;
    /** 交货结束日期 */
    endDeliveryDate?: number;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

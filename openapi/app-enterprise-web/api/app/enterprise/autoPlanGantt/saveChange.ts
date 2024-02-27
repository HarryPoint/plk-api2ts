import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/自动排产甘特图相关/saveChangeUsingPOST
*/
export default function fetchMethod(options: { data: IChangeGanttChartPlanDTO[] }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/autoPlanGantt/saveChange",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 变更甘特图计划DTO */
export interface IChangeGanttChartPlanDTO {
    /** 排期类型 */
    scheduleType?: EChangeGanttChartPlanDTO_scheduleType;
    /** 排期id */
    scheduleId?: string;
    /** 最新时间 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 最新时间 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EChangeGanttChartPlanDTO_scheduleType {
    /** 工序占用 */
    OCCUPY_PROCESS = "OCCUPY_PROCESS",
    /** 时间占用 */
    OCCUPY_TIME = "OCCUPY_TIME",
    /** 工序 */
    PROCESS = "PROCESS",
    /** 生产订单 */
    ORDER = "ORDER"
}

import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/任务排班相关/editSchedulUsingPOST_1
*/
export default function fetchMethod(options: { data: ITaskSchedulingDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathTaskCalendar/editSchedul",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 任务排班DTO */
export interface ITaskSchedulingDTO {
    /** 排班天数集 */
    scheduleDays?: ITaskSchedulingDaysDTO[];
    /** 开始日期 yyyy-MM-dd */
    beginDate: string;
    /** 循环天数 */
    loopDay: number;
}
/** 任务排班天数DTO */
export interface ITaskSchedulingDaysDTO {
    /** 排班明细 */
    flowPathTaskShiftIds?: string[];
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

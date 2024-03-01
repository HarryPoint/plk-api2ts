import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工厂日历相关/getClassShiftIdsByScheduleDateUsingPOST
*/
export default function fetchMethod(options: { data: ISchedulingDateDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultSetLong>(
        {
            url: "/masterdata-service/calendar/getClassShiftIdsByScheduleDate",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 排班日期DTO */
export interface ISchedulingDateDTO {
    /** 排班日期 yyyy-MM-dd */
    scheduleDate?: number;
}
/** JSONResult«Set«long»» */
export interface IJSONResultSetLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

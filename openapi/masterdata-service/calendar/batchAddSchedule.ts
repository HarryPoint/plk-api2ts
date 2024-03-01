import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工厂日历相关/batchAddScheduleUsingPOST
*/
export default function fetchMethod(options: { data: IScheduleNewDtos[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/calendar/batchAddSchedule",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 排班新增DTO */
export interface IScheduleNewDtos {
    /** 班组id */
    classGroupIdList?: string[];
    /** 班次id */
    classShiftId?: string;
    /** 排班日期 yyyy-MM-dd */
    scheduleDate?;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

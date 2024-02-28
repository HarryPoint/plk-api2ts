import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工厂日历相关/batchAddScheduleUsingPOST
*/
export default function fetchMethod(options: { data: IScheduleNewDtos[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
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
    /** 排班日期 yyyy-MM-dd */
    scheduleDate?;
    /** 班次id */
    classShiftId?: string;
    /** 班组id */
    classGroupIdList?: string[];
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

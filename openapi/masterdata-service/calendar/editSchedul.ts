import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工厂日历相关/editSchedulUsingPOST
*/
export default function fetchMethod(options: { data: ICalendarSchedulingVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/calendar/editSchedul",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 日历排班VO */
export interface ICalendarSchedulingVO {
    /** 开始日期 yyyy-MM-dd */
    beginDate: string;
    /** 循环天数 */
    loopDay: number;
    /** 排班天数集 */
    scheduleDays?: ICalendarSchedulingDaysVO[];
}
/** 日历排班天数VO */
export interface ICalendarSchedulingDaysVO {
    /** 排班明细 */
    scheduleDayDetails?: ICalendarScheduleDaysDetailsVO[];
}
/** 日历排班天数明细VO */
export interface ICalendarScheduleDaysDetailsVO {
    /** 班组id集合 */
    classGroupIdList?: string[];
    /** 班次id */
    classShiftId?: string;
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

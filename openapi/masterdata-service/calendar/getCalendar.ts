import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工厂日历相关/getCalendarUsingPOST
*/
export default function fetchMethod(options: { data: IFactoryCalendarSearchVO1, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultFactoryCalendarReturnsVO>(
        {
            url: "/masterdata-service/calendar/getCalendar",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工厂日历搜索VO_1 */
export interface IFactoryCalendarSearchVO1 {
    /** 开始日期 yyyy-MM-dd, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询 */
    beginDate?: string;
    /** 结束日期 yyyy-MM-dd, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询 */
    endDate?: string;
    /** 月份 yyyy-MM, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询 */
    month?: string;
}
/** JSONResult«工厂日历返回VO» */
export interface IJSONResultFactoryCalendarReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFactoryCalendarReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工厂日历返回VO */
export interface IFactoryCalendarReturnsVO {
    /** 工厂日历详情返回VO */
    calendarDetailList?: IFactoryCalendarDetailsBackToVO[];
    /** 排班的最后一天 */
    endScheduleDay?;
}
/** 工厂日历详情返回VO */
export interface IFactoryCalendarDetailsBackToVO {
    /** 创建时间 */
    createTime?: number;
    /** 对应班组班次集 */
    groupShifts?: ICalendarShiftInformationReturnedToVO[];
    /** 工厂日历id */
    id?: string;
    /** 日程安排日期 */
    scheduleDate?;
}
/** 日历班次信息返回VO */
export interface ICalendarShiftInformationReturnedToVO {
    /** 班组列表信息 */
    classGroupList?: ICalendarGroupInformationIsReturnedToVO[];
    /** 班次开始时间 */
    classShiftBeginTime?: ILocalTime;
    /** 班次结束时间 */
    classShiftEndTime?: ILocalTime;
    /** 班次id */
    classShiftId?: string;
    /** 班次名称 */
    classShiftName?: string;
    /** 班次结束时间类型 */
    endTimeType?: ECalendarShiftInformationReturnedToVO_endTimeType;
    /** 工厂日历与班组班次关联id */
    id?: string;
}
/** 日历班组信息返回VO */
export interface ICalendarGroupInformationIsReturnedToVO {
    /** 班组id */
    classGroupId?: string;
    /** 班组名称 */
    classGroupName?: string;
    /** 班组对应的员工信息集 */
    userInfos?: IIdNameNumberVO[];
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** 编号 */
    code: string;
    /** id */
    id: string;
    /** 名称 */
    name: string;
}
/** LocalTime */
export interface ILocalTime {
    /** undefined */
    hour?: number;
    /** undefined */
    minute?: number;
    /** undefined */
    nano?: number;
    /** undefined */
    second?: number;
}

export enum ECalendarShiftInformationReturnedToVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}

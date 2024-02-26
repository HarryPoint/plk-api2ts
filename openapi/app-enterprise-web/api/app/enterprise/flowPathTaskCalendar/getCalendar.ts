import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/任务排班相关/getGroupListUsingPOST
*/
export default function fetchMethod(options: { data: IFactoryCalendarSearchVO1 }, extraOptions?: any) {
    return http<IJSONResultListTaskSchedulingReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathTaskCalendar/getCalendar",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工厂日历搜索VO_1 */
export interface IFactoryCalendarSearchVO1 {
    /** 月份 yyyy-MM, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询 */
    month?: string;
    /** 开始日期 yyyy-MM-dd, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询 */
    beginDate?: string;
    /** 结束日期 yyyy-MM-dd, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询 */
    endDate?: string;
}
/** JSONResult«List«任务排班返回VO»» */
export interface IJSONResultListTaskSchedulingReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITaskSchedulingReturnsToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 任务排班返回VO */
export interface ITaskSchedulingReturnsToVO {
    /** 任务排班id */
    id?: number;
    /** 日程安排日期 */
    scheduleDate?: string;
    /** 对应班次集 */
    shifts?: IProcessTaskShiftUserInformationIsReturnedToVO[];
}
/** 流程任务班次用户信息返回VO */
export interface IProcessTaskShiftUserInformationIsReturnedToVO {
    /** 任务排班与任务班次关联id */
    id?: number;
    /** 对应的员工信息集 */
    userInfos?: IIdNameNumberVO[];
    /** 班次id */
    flowPathShiftId?: number;
    /** 班次名称 */
    flowPathShiftName?: string;
    /** 班次开始时间 */
    flowPathShiftBeginTime?: ILocalTime;
    /** 班次结束时间类型 */
    endTimeType?: string;
    /** 班次结束时间 */
    flowPathShiftEndTime?: ILocalTime;
    /** 方案名称 */
    planName?: string;
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}
/** LocalTime */
export interface ILocalTime {
    /** undefined */
    hour?: number;
    /** undefined */
    minute?: number;
    /** undefined */
    second?: number;
    /** undefined */
    nano?: number;
}

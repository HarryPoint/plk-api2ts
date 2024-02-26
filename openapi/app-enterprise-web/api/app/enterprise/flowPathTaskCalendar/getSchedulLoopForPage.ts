import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/任务排班相关/getSchedulLoopForPageUsingPOST_1
*/
export default function fetchMethod(options: { data: IProcessFactoryCalendarSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProcessSchedulingRecordsAreReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathTaskCalendar/getSchedulLoopForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程工厂日历搜索VO */
export interface IProcessFactoryCalendarSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«流程排班记录返回VO»» */
export interface IJSONResultPagingInformationProcessSchedulingRecordsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationProcessSchedulingRecordsAreReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«流程排班记录返回VO» */
export interface IPagingInformationProcessSchedulingRecordsAreReturnedToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheProcessSchedulingRecordIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProcessSchedulingRecordsAreReturnedToVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProcessSchedulingRecordsAreReturnedToVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 流程排班记录返回VO */
export interface ITheProcessSchedulingRecordIsReturnedToVO {
    /** id */
    id?: number;
    /** 开始日期 */
    beginDate?: string;
    /** 循环天数 */
    loopDay?: number;
    /** 排班天数集 */
    schedulDays?: IProcessSchedulingBaseReturnsVO[];
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
}
/** 流程排班基数返回VO */
export interface IProcessSchedulingBaseReturnsVO {
    /** id */
    id?: number;
    /** 流程排班循环配置 */
    schedulDayDetails?: IProcessSchedulingBaseDetailsAreReturnedToVO[];
}
/** 流程排班基数明细返回VO */
export interface IProcessSchedulingBaseDetailsAreReturnedToVO {
    /** id */
    id?: number;
    /** 班组id */
    classGroupId?: number;
    /** 班组名称 */
    classGroupName?: string;
    /** 班次id */
    classShiftId?: number;
    /** 班次名称 */
    classShiftName?: string;
    /** 班次开始时间 */
    classShiftBeginTime?: ILocalTime;
    /** 班次结束时间类型 */
    endTimeType?: EProcessSchedulingBaseDetailsAreReturnedToVO_endTimeType;
    /** 班次结束时间 */
    classShiftEndTime?: ILocalTime;
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationProcessSchedulingRecordsAreReturnedToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProcessSchedulingRecordsAreReturnedToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessSchedulingBaseDetailsAreReturnedToVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}

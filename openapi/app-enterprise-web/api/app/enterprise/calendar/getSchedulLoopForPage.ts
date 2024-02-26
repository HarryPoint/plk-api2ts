import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工厂日历相关/getSchedulLoopForPageUsingPOST
*/
export default function fetchMethod(options: { data: IFactoryCalendarSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationSchedulingRecordReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/calendar/getSchedulLoopForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工厂日历搜索VO */
export interface IFactoryCalendarSearchVO {
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
/** JSONResult«分页信息«排班记录返回VO»» */
export interface IJSONResultPagingInformationSchedulingRecordReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationSchedulingRecordReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«排班记录返回VO» */
export interface IPagingInformationSchedulingRecordReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheSchedulingRecordIsReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationSchedulingRecordReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationSchedulingRecordReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 排班记录返回VO */
export interface ITheSchedulingRecordIsReturnedToVO {
    /** id */
    id?: number;
    /** 开始日期 */
    beginDate?: string;
    /** 循环天数 */
    loopDay?: number;
    /** 排班天数集 */
    scheduleDays?: ISchedulingBaseReturnsVO[];
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
}
/** 排班基数返回VO */
export interface ISchedulingBaseReturnsVO {
    /** id */
    id?: number;
    /** 排班循环配置 */
    scheduleDayDetails?: IScheduleBaseDetailsAreReturnedToVO[];
}
/** 排班基数明细返回VO */
export interface IScheduleBaseDetailsAreReturnedToVO {
    /** id */
    id?: number;
    /** 班次id */
    classShiftId?: number;
    /** 班次名称 */
    classShiftName?: string;
    /** 班次开始时间 */
    classShiftBeginTime?: ILocalTime;
    /** 班次结束时间类型 */
    endTimeType?: EScheduleBaseDetailsAreReturnedToVO_endTimeType;
    /** 班次结束时间 */
    classShiftEndTime?: ILocalTime;
    /** 班组列表信息 */
    classGroupList?: ISchedulingBaseDetailGroupReturnsVO[];
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
/** 排班基数明细班组返回VO */
export interface ISchedulingBaseDetailGroupReturnsVO {
    /** 班组id */
    classGroupId?: number;
    /** 班组名称 */
    classGroupName?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationSchedulingRecordReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationSchedulingRecordReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EScheduleBaseDetailsAreReturnedToVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}

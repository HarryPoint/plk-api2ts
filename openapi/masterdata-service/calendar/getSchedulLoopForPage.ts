import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工厂日历相关/getSchedulLoopForPageUsingPOST
*/
export default function fetchMethod(options: { data: IFactoryCalendarSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationSchedulingRecordReturnsVO>(
        {
            url: "/masterdata-service/calendar/getSchedulLoopForPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工厂日历搜索VO */
export interface IFactoryCalendarSearchVO {
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
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
    /** 响应结果 */
    data?: IPagingInformationSchedulingRecordReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«排班记录返回VO» */
export interface IPagingInformationSchedulingRecordReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationSchedulingRecordReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationSchedulingRecordReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheSchedulingRecordIsReturnedToVO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 排班记录返回VO */
export interface ITheSchedulingRecordIsReturnedToVO {
    /** 开始日期 */
    beginDate?;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** id */
    id?: string;
    /** 循环天数 */
    loopDay?: number;
    /** 排班天数集 */
    scheduleDays?: ISchedulingBaseReturnsVO[];
}
/** 排班基数返回VO */
export interface ISchedulingBaseReturnsVO {
    /** id */
    id?: string;
    /** 排班循环配置 */
    scheduleDayDetails?: IScheduleBaseDetailsAreReturnedToVO[];
}
/** 排班基数明细返回VO */
export interface IScheduleBaseDetailsAreReturnedToVO {
    /** 班组列表信息 */
    classGroupList?: ISchedulingBaseDetailGroupReturnsVO[];
    /** 班次开始时间 */
    classShiftBeginTime?: ILocalTime;
    /** 班次结束时间 */
    classShiftEndTime?: ILocalTime;
    /** 班次id */
    classShiftId?: string;
    /** 班次名称 */
    classShiftName?: string;
    /** 班次结束时间类型 */
    endTimeType?: EScheduleBaseDetailsAreReturnedToVO_endTimeType;
    /** id */
    id?: string;
}
/** 排班基数明细班组返回VO */
export interface ISchedulingBaseDetailGroupReturnsVO {
    /** 班组id */
    classGroupId?: string;
    /** 班组名称 */
    classGroupName?: string;
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationSchedulingRecordReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationSchedulingRecordReturnsVO_hasPreviousPage {
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

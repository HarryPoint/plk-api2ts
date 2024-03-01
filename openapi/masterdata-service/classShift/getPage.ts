import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/班次相关/getPageUsingPOST_1
*/
export default function fetchMethod(options: { data: IShiftSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationShiftReturnsVO>(
        {
            url: "/masterdata-service/classShift/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 班次搜索VO */
export interface IShiftSearchVO {
    /** 编号 */
    code?: string;
    /** 状态 */
    dataStatus?: number;
    /** 名称 */
    name?: string;
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
/** JSONResult«分页信息«班次返回VO»» */
export interface IJSONResultPagingInformationShiftReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationShiftReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«班次返回VO» */
export interface IPagingInformationShiftReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationShiftReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationShiftReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IShiftBackVO[];
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
/** 班次返回VO */
export interface IShiftBackVO {
    /** 开始时间 */
    beginTime?: number;
    /** 班次编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 状态 */
    dataStatus?: number;
    /** 结束时间 */
    endTime?: number;
    /** 班次结束时间类型 */
    endTimeType?: EShiftBackVO_endTimeType;
    /** id */
    id?: string;
    /** 班次名称 */
    name?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationShiftReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationShiftReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EShiftBackVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}

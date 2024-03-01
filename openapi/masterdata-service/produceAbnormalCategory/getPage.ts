import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产异常类型相关/getPageUsingPOST_10
*/
export default function fetchMethod(options: { data: IExceptionTypeSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationExceptionTypeVOIsReturned>(
        {
            url: "/masterdata-service/produceAbnormalCategory/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 异常类型搜索VO */
export interface IExceptionTypeSearchVO {
    /** 编号 */
    code?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 类型 */
    type?: EExceptionTypeSearchVO_type;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«异常类型返回VO»» */
export interface IJSONResultPagingInformationExceptionTypeVOIsReturned {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationExceptionTypeIsReturnedVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«异常类型返回VO» */
export interface IPagingInformationExceptionTypeIsReturnedVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationExceptionTypeIsReturnedVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationExceptionTypeIsReturnedVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IExceptionTypeReturnsVO[];
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
/** 异常类型返回VO */
export interface IExceptionTypeReturnsVO {
    /** 类型编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 类型名称 */
    name?: string;
    /** 所属分类 */
    type?: EExceptionTypeReturnsVO_type;
    /** 所属分类 */
    typeDesc?: string;
}

export enum EExceptionTypeSearchVO_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 撤销任务 */
    CANCEL_TASK = "CANCEL_TASK"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationExceptionTypeIsReturnedVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationExceptionTypeIsReturnedVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EExceptionTypeReturnsVO_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 撤销任务 */
    CANCEL_TASK = "CANCEL_TASK"
}

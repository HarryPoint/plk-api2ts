import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产标签相关/getPageUsingPOST_19
*/
export default function fetchMethod(options: { data: IExceptionTagSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationExceptionLabelReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTag/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 异常标签搜索VO */
export interface IExceptionTagSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 类型 */
    type?: EExceptionTagSearchVO_type;
    /** 状态(是否启用) */
    isValid?: EExceptionTagSearchVO_isValid;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«异常标签返回VO»» */
export interface IJSONResultPagingInformationExceptionLabelReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationExceptionLabelReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«异常标签返回VO» */
export interface IPagingInformationExceptionLabelReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheExceptionTagReturnsVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationExceptionLabelReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationExceptionLabelReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 异常标签返回VO */
export interface ITheExceptionTagReturnsVO {
    /** id */
    id?: string;
    /** 所属分类 */
    type?: ETheExceptionTagReturnsVO_type;
    /** 所属分类 */
    typeDesc?: string;
    /** 标签名称 */
    name?: string;
    /** 标签编号 */
    code?: string;
    /** 是否启用 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
}

export enum EExceptionTagSearchVO_type {
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

export enum EExceptionTagSearchVO_isValid {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationExceptionLabelReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationExceptionLabelReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheExceptionTagReturnsVO_type {
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

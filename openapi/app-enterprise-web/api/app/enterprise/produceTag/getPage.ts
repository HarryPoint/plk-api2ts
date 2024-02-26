import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产标签相关/getPageUsingPOST_19
*/
export default function fetchMethod(options: { data: IExceptionTagSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationExceptionLabelReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTag/getPage",
            method: "post",
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
    type?: ('SCRAP' | 'HOLD' | 'HOLD_PAUSE' | 'REPORT' | 'BACK' | 'CANCEL_TASK');
    /** 状态(是否启用) */
    isValid?: ('Y' | 'N');
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
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
    ts?: number;
}
/** 分页信息«异常标签返回VO» */
export interface IPagingInformationExceptionLabelReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheExceptionTagReturnsVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 异常标签返回VO */
export interface ITheExceptionTagReturnsVO {
    /** id */
    id?: number;
    /** 所属分类 */
    type?: ('SCRAP' | 'HOLD' | 'HOLD_PAUSE' | 'REPORT' | 'BACK' | 'CANCEL_TASK');
    /** 所属分类 */
    typeDesc?: string;
    /** 标签名称 */
    name?: string;
    /** 标签编号 */
    code?: string;
    /** 是否启用 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
}

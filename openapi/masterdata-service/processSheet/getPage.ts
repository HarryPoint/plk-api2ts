import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺卡相关/getPageUsingPOST_9
*/
export default function fetchMethod(options: { data: ICraftCardSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProcessCardReturnsVO>(
        {
            url: "/masterdata-service/processSheet/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工艺卡搜索VO */
export interface ICraftCardSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 所属工序id */
    processId?: string;
    /** 名称 */
    name?: string;
    /** 所属物料id */
    materialId?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«工艺卡返回VO»» */
export interface IJSONResultPagingInformationProcessCardReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationProcessCardReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«工艺卡返回VO» */
export interface IPagingInformationProcessCardReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheCraftCardReturnsToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProcessCardReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProcessCardReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 工艺卡返回VO */
export interface ITheCraftCardReturnsToVO {
    /** id */
    id?: string;
    /** 工艺卡名称 */
    name?: string;
    /** 工艺卡编号 */
    code?: string;
    /** 所属物料ids */
    materialIds?: string[];
    /** 所属物料名称列表 */
    materialNameList?: string[];
    /** 所属工序ids */
    processIds?: string[];
    /** 所属工序名称列表 */
    processNameList?: string[];
    /** 状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationProcessCardReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProcessCardReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

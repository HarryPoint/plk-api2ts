import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工序任务设置相关/getForPageUsingPOST_12
*/
export default function fetchMethod(options: { data: IProcessTaskSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProcedureTaskSetVO>(
        {
            url: "/masterdata-service/processTaskSetting/getForPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序任务搜索VO */
export interface IProcessTaskSearchVO {
    /** 是否需要分配 */
    isAssign?: EProcessTaskSearchVO_isAssign;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序id集合 */
    processIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«工序任务设置VO»» */
export interface IJSONResultPagingInformationProcedureTaskSetVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationProcedureTaskSetVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«工序任务设置VO» */
export interface IPagingInformationProcedureTaskSetVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProcedureTaskSetVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProcedureTaskSetVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProcedureTaskSetVO[];
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
/** 工序任务设置VO */
export interface IProcedureTaskSetVO {
    /** 默认操作人员列表 */
    defaultUserList?: IIdNameNumberVO[];
    /** 是否需要分配 */
    isAssign?: EProcedureTaskSetVO_isAssign;
    /** 工序编号 */
    processCode?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
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

export enum EProcessTaskSearchVO_isAssign {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationProcedureTaskSetVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProcedureTaskSetVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcedureTaskSetVO_isAssign {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

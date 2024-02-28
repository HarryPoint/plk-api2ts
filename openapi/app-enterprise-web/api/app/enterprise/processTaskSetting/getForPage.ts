import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/工序任务设置相关/getForPageUsingPOST_18
*/
export default function fetchMethod(options: { data: IProcessTaskSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProcedureTaskSetVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processTaskSetting/getForPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序任务搜索VO */
export interface IProcessTaskSearchVO {
    /** 工序id集合 */
    processIds?: string[];
    /** 是否需要分配 */
    isAssign?: EProcessTaskSearchVO_isAssign;
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
/** JSONResult«分页信息«工序任务设置VO»» */
export interface IJSONResultPagingInformationProcedureTaskSetVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationProcedureTaskSetVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«工序任务设置VO» */
export interface IPagingInformationProcedureTaskSetVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProcedureTaskSetVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProcedureTaskSetVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProcedureTaskSetVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 工序任务设置VO */
export interface IProcedureTaskSetVO {
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 是否需要分配 */
    isAssign?: EProcedureTaskSetVO_isAssign;
    /** 默认操作人员列表 */
    defaultUserList?: IIdNameNumberVO[];
}
/** Id，名称，编号VO */
export interface IIdNameNumberVO {
    /** id */
    id: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
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

export enum EPagingInformationProcedureTaskSetVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProcedureTaskSetVO_hasNextPage {
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

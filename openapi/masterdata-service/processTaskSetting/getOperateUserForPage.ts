import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工序任务设置相关/getOperateUserForPageUsingPOST
*/
export default function fetchMethod(options: { data: IProcessOperatorSearchesVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProcessOperatorVO>(
        {
            url: "/masterdata-service/processTaskSetting/getOperateUserForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工序操作人员搜索VO */
export interface IProcessOperatorSearchesVO {
    /** 当前页面 */
    pageNo?: number;
    /** 工序id */
    processId: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 员工类型 */
    userType: EProcessOperatorSearchesVO_userType;
    /** 员工id集合 */
    userIds?: string[];
    /** 部门id集合 */
    departmentIds?: string[];
    /** 班组id集合 */
    classGroupIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«工序操作人员VO»» */
export interface IJSONResultPagingInformationProcessOperatorVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationProcessOperatorVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«工序操作人员VO» */
export interface IPagingInformationProcessOperatorVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProcessOperatorVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationProcessOperatorVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationProcessOperatorVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 工序操作人员VO */
export interface IProcessOperatorVO {
    /** 员工id */
    userId?: string;
    /** 员工编号 */
    userCode?: string;
    /** 员工名称 */
    userName?: string;
    /** 部门id */
    departmentId?: string;
    /** 部门编号 */
    departmentCode?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 班组id */
    classGroupId?: string;
    /** 班组名称 */
    classGroupName?: string;
    /** 班组编号 */
    classGroupCode?: string;
}

export enum EProcessOperatorSearchesVO_userType {
    /** 生产 */
    PRODUCE = "PRODUCE",
    /** 质量 */
    QUALITY = "QUALITY"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationProcessOperatorVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationProcessOperatorVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.139.107:18100/doc.html#/default/运营角色相关/pageUsingPOST_3
*/
export default function fetchMethod(options: { data: IOperationRoleQuery }, extraOptions?: any) {
    return http<IJSONResultPagingInformationOperationRoleResponse>(
        {
            url: "/plk-uaa-service/manageRole/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 运营角色查询 */
export interface IOperationRoleQuery {
    /** 创建人 */
    createUserIds?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 创建时间开始 */
    createBeginTime?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 角色编码 */
    code?: string;
    /** 角色名称 */
    name?: string;
    /** 创建时间结束 */
    createEndTime?: number;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«运营角色响应»» */
export interface IJSONResultPagingInformationOperationRoleResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationOperationRoleResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«运营角色响应» */
export interface IPageInformationOperationRoleResponse {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IOperationalRoleResponse[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationOperationRoleResponse_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationOperationRoleResponse_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 运营角色响应 */
export interface IOperationalRoleResponse {
    /** 数据状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 是否是超级管理员 */
    isManage?: EOperationalRoleResponse_isManage;
    /** 是否是管理员 */
    isAdmin?: EOperationalRoleResponse_isAdmin;
    /** 描述 */
    description?: string;
    /** 关联的账号数 */
    relationUserCount?: number;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationOperationRoleResponse_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationOperationRoleResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EOperationalRoleResponse_isManage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EOperationalRoleResponse_isAdmin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

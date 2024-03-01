import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/角色相关/pageUsingPOST_7
*/
export default function fetchMethod(options: { data: IRoleQuery }, extraOptions?: any) {
    return http<IJSONResultPagingInformationEnterpriseRoleResponse>(
        {
            url: "/plk-uaa-service/role/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 角色查询 */
export interface IRoleQuery {
    /** 应用级别 */
    applicationLevel?: ERoleQuery_applicationLevel;
    /** 角色编码 */
    code?: string;
    /** 创建时间开始 */
    createBeginTime?: number;
    /** 创建时间结束 */
    createEndTime?: number;
    /** 创建人 */
    createUserIds?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 角色名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 服务业务ID */
    serviceBusinessId?: string;
    /** 服务对象ID */
    serviceObjectId?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«企业角色响应»» */
export interface IJSONResultPagingInformationEnterpriseRoleResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationEnterpriseRoleResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«企业角色响应» */
export interface IPagingInformationEnterpriseRoleResponse {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationEnterpriseRoleResponse_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationEnterpriseRoleResponse_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IEnterpriseRoleResponse[];
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
/** 企业角色响应 */
export interface IEnterpriseRoleResponse {
    /** 应用级别 */
    applicationLevel?: EEnterpriseRoleResponse_applicationLevel;
    /** 编码 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 描述 */
    description?: string;
    /** id */
    id?: string;
    /** 是否是管理员 */
    isAdmin?: EEnterpriseRoleResponse_isAdmin;
    /** 是否是超级管理员 */
    isManage?: EEnterpriseRoleResponse_isManage;
    /** 名称 */
    name?: string;
    /** 服务业务ID */
    serviceBusinessId?: string;
    /** 服务对象ID */
    serviceObjectId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
    /** 角色包含用户数 */
    userCount?: number;
}

export enum ERoleQuery_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationEnterpriseRoleResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationEnterpriseRoleResponse_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEnterpriseRoleResponse_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum EEnterpriseRoleResponse_isAdmin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEnterpriseRoleResponse_isManage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

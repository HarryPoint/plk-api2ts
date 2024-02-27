import { http } from "@/api/http";

/**
* @link http://47.108.139.107:18100/doc.html#/default/角色相关/listAllUsingPOST
*/
export default function fetchMethod(options: { data: IRoleQuery }, extraOptions?: any) {
    return http<IJSONResultListResponseForRoleInformation>(
        {
            url: "/plk-uaa-service/role/listAll",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 角色查询 */
export interface IRoleQuery {
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
    /** 服务对象ID */
    serviceObjectId?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 角色编码 */
    code?: string;
    /** 角色名称 */
    name?: string;
    /** 应用级别 */
    applicationLevel?: ERoleQuery_applicationLevel;
    /** 创建时间结束 */
    createEndTime?: number;
    /** 服务业务ID */
    serviceBusinessId?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«List«角色信息响应»» */
export interface IJSONResultListResponseForRoleInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IRoleMessageResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 角色信息响应 */
export interface IRoleMessageResponse {
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
    isManage?: ERoleMessageResponse_isManage;
    /** 是否是管理员 */
    isAdmin?: ERoleMessageResponse_isAdmin;
    /** 描述 */
    description?: string;
    /** 应用级别 */
    applicationLevel?: ERoleMessageResponse_applicationLevel;
    /** 服务对象ID */
    serviceObjectId?: string;
    /** 服务业务ID */
    serviceBusinessId?: string;
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

export enum ERoleMessageResponse_isManage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ERoleMessageResponse_isAdmin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ERoleMessageResponse_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/运营账号相关/pageUsingPOST_4
*/
export default function fetchMethod(options: { data: IAccountInquiry }, extraOptions?: any) {
    return http<IJSONResultPageInformationOperationUserInformationResponse>(
        {
            url: "/plk-uaa-service/manageUser/page",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 账号查询 */
export interface IAccountInquiry {
    /** 创建时间开始 */
    createBeginTime?: number;
    /** 创建时间结束 */
    createEndTime?: number;
    /** 创建人 */
    createUserIds?: string[];
    /** 员工姓名 */
    employeeName?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 角色id集 */
    roleIds?: string[];
    /** 状态集 */
    statusList?: EAccountInquiry_statusList_items[];
    /** 手机号码 */
    telephone?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«运营用户信息响应»» */
export interface IJSONResultPageInformationOperationUserInformationResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationOperationUserInformationResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«运营用户信息响应» */
export interface IPageInformationOperationUserInformationResponse {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationOperationUserInformationResponse_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationOperationUserInformationResponse_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IOperationUserInformationResponse[];
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
/** 运营用户信息响应 */
export interface IOperationUserInformationResponse {
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 邮件 */
    email?: string;
    /** 过期时间 */
    expireTime?: number;
    /** id */
    id?: string;
    /** 最后登录时间 */
    lastLoginTime?: number;
    /** 运营员工信息 */
    manageEmployee?: IOperationalEmployeeInformationResponse;
    /** 运营角色信息 */
    manageRoleList?: IOperationalRoleResponse[];
    /** 状态 */
    status?: EOperationUserInformationResponse_status;
    /** 手机号 */
    telephone?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}
/** 运营员工信息响应 */
export interface IOperationalEmployeeInformationResponse {
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
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}
/** 运营角色响应 */
export interface IOperationalRoleResponse {
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
    isAdmin?: EOperationalRoleResponse_isAdmin;
    /** 是否是超级管理员 */
    isManage?: EOperationalRoleResponse_isManage;
    /** 名称 */
    name?: string;
    /** 关联的账号数 */
    relationUserCount?: number;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}

export enum EAccountInquiry_statusList_items {
    WAIT_ACTIVATE = "WAIT_ACTIVATE",
    ACTIVATED = "ACTIVATED",
    DISABLED = "DISABLED"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationOperationUserInformationResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationOperationUserInformationResponse_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EOperationUserInformationResponse_status {
    /** 待激活 */
    WAIT_ACTIVATE = "WAIT_ACTIVATE",
    /** 已激活 */
    ACTIVATED = "ACTIVATED",
    /** 已禁用 */
    DISABLED = "DISABLED"
}

export enum EOperationalRoleResponse_isAdmin {
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

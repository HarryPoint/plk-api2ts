import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/用户账号相关/pageCurrentEnterpriseUsingPOST
*/
export default function fetchMethod(options: { data: IQueryTheCurrentEnterpriseUser }, extraOptions?: any) {
    return http<IJSONResultPagingInformationEnterpriseUserResponse>(
        {
            url: "/plk-uaa-service/user/pageCurrentEnterprise",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 当前企业用户查询 */
export interface IQueryTheCurrentEnterpriseUser {
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
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«企业用户响应»» */
export interface IJSONResultPagingInformationEnterpriseUserResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationEnterpriseUserResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«企业用户响应» */
export interface IPagingInformationEnterpriseUserResponse {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationEnterpriseUserResponse_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationEnterpriseUserResponse_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IEnterpriseUserResponse[];
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
/** 企业用户响应 */
export interface IEnterpriseUserResponse {
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 部门 */
    department?: IDepartmentRespondsToDTO;
    /** 员工 */
    employee?: IEmployeeInformationResponse;
    /** 员工id */
    employeeId?: string;
    /** id */
    id?: string;
    /** 角色集 */
    roleList?: IRoleMessageResponse[];
    /** 手机号码 */
    telephone?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
    /** 用户id */
    userId?: string;
}
/** 部门响应 DTO */
export interface IDepartmentRespondsToDTO {
    /** code */
    code?: string;
    /** id */
    id?: string;
    /** name */
    name?: string;
}
/** 员工信息响应 */
export interface IEmployeeInformationResponse {
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
    /** 邮件 */
    email?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 手机号 */
    telephone?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}
/** 角色信息响应 */
export interface IRoleMessageResponse {
    /** 应用级别 */
    applicationLevel?: ERoleMessageResponse_applicationLevel;
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
    isAdmin?: ERoleMessageResponse_isAdmin;
    /** 是否是超级管理员 */
    isManage?: ERoleMessageResponse_isManage;
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
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationEnterpriseUserResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationEnterpriseUserResponse_hasPreviousPage {
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

export enum ERoleMessageResponse_isAdmin {
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

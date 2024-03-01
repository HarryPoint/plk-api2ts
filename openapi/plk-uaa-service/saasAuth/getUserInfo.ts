import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/getUserInfoUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultSaasUserInformationResponse>(
        {
            url: "/plk-uaa-service/saasAuth/getUserInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Saas 用户信息响应» */
export interface IJSONResultSaasUserInformationResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISaasUserInformationResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Saas 用户信息响应 */
export interface ISaasUserInformationResponse {
    /** 头像 */
    avatar?: string;
    /** 部门信息 */
    department?: IDepartmentRespondsToDTO;
    /** 员工信息 */
    employee?: IEmployeeInformationResponse;
    /** 企业信息 */
    enterprise?: ISaasEnterprisesRespondToDtos;
    /** id */
    id?: string;
    /** 是否是管理员 */
    isAdmin?: ESaasUserInformationResponse_isAdmin;
    /** 是否是超级管理员 */
    isManage?: ESaasUserInformationResponse_isManage;
    /** 手机号 */
    telephone?: string;
    /** 用户名 */
    username?: string;
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
/** Saas企业响应 DTO */
export interface ISaasEnterprisesRespondToDtos {
    /** 企业编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 企业到期时间 */
    expireTime?: number;
    /** id */
    id?: string;
    /** 是否启用批次关联 */
    isEnableBatchManagement?: ESaasEnterprisesRespondToDtos_isEnableBatchManagement;
    /** 企业名 */
    name?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}

export enum ESaasUserInformationResponse_isAdmin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESaasUserInformationResponse_isManage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESaasEnterprisesRespondToDtos_isEnableBatchManagement {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

import { http } from "@/api/http";

/**
* @link http://47.108.139.107:18100/doc.html#/default/员工相关/modifyUsingPOST_4
*/
export default function fetchMethod(options: { data: IEmployeeEditRequest }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/employee/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 员工编辑请求 */
export interface IEmployeeEditRequest {
    /** id */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 角色id集 */
    roleIds?: string[];
    /** 部门id */
    departmentId?: string;
    /** 手机号码 */
    telephone?: string;
    /** 邮件 */
    email?: string;
    /** 是否允许登录 */
    isAllowLogin?: EEmployeeEditRequest_isAllowLogin;
    /** 是否处理账号信息 */
    isHandleAccount?: EEmployeeEditRequest_isHandleAccount;
    /** 应用级别 */
    applicationLevel?: EEmployeeEditRequest_applicationLevel;
    /** 服务对象ID */
    serviceObjectId?: string;
    /** 服务业务ID */
    serviceBusinessId?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EEmployeeEditRequest_isAllowLogin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEmployeeEditRequest_isHandleAccount {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEmployeeEditRequest_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/员工相关/addSuperManagerUsingPOST
*/
export default function fetchMethod(options: { data: INewRequestForOvermanagementEmployee }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/employee/addSuperManager",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 超管员工新增请求 */
export interface INewRequestForOvermanagementEmployee {
    /** 员工 */
    employee?: IEmployeeEditRequest;
    /** 密码 */
    password?: string;
}
/** 员工编辑请求 */
export interface IEmployeeEditRequest {
    /** id */
    id?: number;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 角色id集 */
    roleIds?: number[];
    /** 部门id */
    departmentId?: number;
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
    serviceObjectId?: number;
    /** 服务业务ID */
    serviceBusinessId?: number;
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
    ts?: number;
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

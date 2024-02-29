import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.139.107:18100/doc.html#/default/员工相关/allUserEmployeeUsingPOST
*/
export default function fetchMethod(options: { data: IUserEmployeeQuery }, extraOptions?: any) {
    return http<IJSONResultListUserEmployeeInformationResponse>(
        {
            url: "/plk-uaa-service/employee/allUserEmployee",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 用户员工查询 */
export interface IUserEmployeeQuery {
    /** 企业id */
    enterpriseId?: string;
}
/** JSONResult«List«用户员工信息响应»» */
export interface IJSONResultListUserEmployeeInformationResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IUserEmployeeInformationResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 用户员工信息响应 */
export interface IUserEmployeeInformationResponse {
    /** 员工id */
    employeeId?: string;
    /** 用户id */
    userId?: string;
    /** 应用级别 */
    applicationLevel?: EUserEmployeeInformationResponse_applicationLevel;
    /** 服务对象ID */
    serviceObjectId?: string;
    /** 服务业务ID */
    serviceBusinessId?: string;
}

export enum EUserEmployeeInformationResponse_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/员工相关/listUserEmployeeUsingPOST
*/
export default function fetchMethod(options: { data: IUserEmployeeQuery1 }, extraOptions?: any) {
    return http<IJSONResultListUserEmployeeInformationResponse>(
        {
            url: "/plk-uaa-service/employee/listUserEmployee",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 用户员工查询_1 */
export interface IUserEmployeeQuery1 {
    /** 企业id */
    enterpriseId?: number;
    /** 员工id集 */
    employeeIds?: number[];
    /** 应用级别 */
    applicationLevel?: string;
    /** 服务对象ID */
    serviceObjectId?: number;
    /** 服务业务ID */
    serviceBusinessId?: number;
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
    ts?: number;
}
/** 用户员工信息响应 */
export interface IUserEmployeeInformationResponse {
    /** 员工id */
    employeeId?: number;
    /** 用户id */
    userId?: number;
    /** 应用级别 */
    applicationLevel?: string;
    /** 服务对象ID */
    serviceObjectId?: number;
    /** 服务业务ID */
    serviceBusinessId?: number;
}

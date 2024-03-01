import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/员工相关/modifyEmailUsingPOST
*/
export default function fetchMethod(options: { data: IEmployeeModifiesEmailToRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/employee/modifyEmail",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 员工修改邮箱请求DTO */
export interface IEmployeeModifiesEmailToRequestDTO {
    /** 邮件 */
    email?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/员工相关/removeBatchUsingPOST
*/
export default function fetchMethod(options: { data: IEmployeesDeleteRequestsInBatches }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/employee/removeBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 员工批量删除请求 */
export interface IEmployeesDeleteRequestsInBatches {
    /** 员工id集 */
    employeeIds?: string[];
    /** 企业id */
    enterpriseId?: string;
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

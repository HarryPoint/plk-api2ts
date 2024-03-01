import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/提案部门完成情况表-相关/getDeadlineMonthUsingGET
*/
export default function fetchMethod(options: { params: { year?: number } }, extraOptions?: any) {
    return http<IJSONResultInt>(
        {
            url: "/masterdata-service/proposalDepartmentStatistics/getDeadlineMonth",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«int» */
export interface IJSONResultInt {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

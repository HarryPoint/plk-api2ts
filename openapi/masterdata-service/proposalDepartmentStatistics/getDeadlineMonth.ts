import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/提案部门完成情况表-相关/getDeadlineMonthUsingGET
*/
export default function fetchMethod(options: { params: { year?: number } }, extraOptions?: any) {
    return http<IJSONResultint>(
        {
            url: "/masterdata-service/proposalDepartmentStatistics/getDeadlineMonth",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«int» */
export interface IJSONResultint {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
